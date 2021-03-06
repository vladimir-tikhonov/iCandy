// Copied from https://github.com/mbrookes/formsy-material-ui/blob/master/src/FormsyText.jsx
// TODO: remove unused parts

import React from "react";
import keycode from "keycode";
import Formsy from "formsy-react";
import TextField from "material-ui/TextField";

function setMuiComponentAndMaybeFocus(c) {
    if (c === this.muiComponent) {
        return;
    }
    this.muiComponent = c;

    if (c && typeof c.focus === "function") {
        this.focus = () => c.focus();
    } else if (this.hasOwnProperty("focus")) {
        delete this.focus;
    }
}

const FormsyText = React.createClass({
    propTypes: {
        defaultValue: React.PropTypes.any,
        name: React.PropTypes.string.isRequired,
        onBlur: React.PropTypes.func,
        onChange: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        onKeyDown: React.PropTypes.func,
        validationError: React.PropTypes.string,
        validationErrors: React.PropTypes.object,
        validations: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),
        value: React.PropTypes.any,
    },

    mixins: [Formsy.Mixin],

    getInitialState() {
        return {
            value: this.controlledValue(),
        };
    },

    componentWillMount() {
        this.setValue(this.controlledValue());
    },

    componentWillReceiveProps(nextProps) {
        const isValueChanging = nextProps.value !== this.props.value;
        if (isValueChanging || nextProps.defaultValue !== this.props.defaultValue) {
            const value = this.controlledValue(nextProps);
            if (isValueChanging || this.props.defaultValue === this.getValue()) {
                this.setState({
                    value,
                });
                this.setValue(value);
            }
        }
    },

    componentWillUpdate(nextProps, nextState) {
        if (nextState._isPristine &&
            nextState._isPristine !== this.state._isPristine) {
            // Calling state here is valid, as it cannot cause infinite recursion.
            const value = this.controlledValue(nextProps);
            this.setValue(value);
            this.setState({value});
        }
    },

    controlledValue(props = this.props) {
        return props.value || props.defaultValue || "";
    },

    handleBlur: function handleBlur(event) {
        this.setValue(event.currentTarget.value);
        if (this.props.onBlur) this.props.onBlur(event);
    },

    handleChange: function handleChange(event) {
        const value = event.currentTarget.value;

        this.setState({value});
        this.setValue(value);

        if (this.props.onChange) {
            this.props.onChange(event);
        }
    },

    handleKeyDown: function handleKeyDown(event) {
        if (keycode(event) === "enter") {
            this.setValue(event.currentTarget.value);
        }

        if (this.props.onKeyDown) {
            this.props.onKeyDown(event, event.currentTarget.value);
        }
    },

    setMuiComponentAndMaybeFocus: setMuiComponentAndMaybeFocus,

    render() {
        const {
            defaultValue, // eslint-disable-line no-unused-vars
            validations, // eslint-disable-line no-unused-vars
            validationError, // eslint-disable-line no-unused-vars
            validationErrors, // eslint-disable-line no-unused-vars
            onFocus,
            value, // eslint-disable-line no-unused-vars
            ...rest,
        } = this.props;

        return (
            <TextField
                {...rest}
                errorText={this.getErrorMessage()}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onFocus={onFocus}
                onKeyDown={this.handleKeyDown}
                ref={this.setMuiComponentAndMaybeFocus}
                value={this.state.value}
            />
        );
    },
});

export default FormsyText;
