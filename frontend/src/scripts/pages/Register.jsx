// @flow

import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import Formsy from "formsy-react";
import { FormsyText } from "formsy-material-ui/lib";
import CSSModules from "react-css-modules";
import {Link} from "react-router";
import {connect} from "react-redux";

import {registrationRequest} from "../actions/registration";
import {getIsRegistrationInProgress, getRegistrationErrors} from "../reducers/registration";
import {getRegistration} from "../reducers/reducer";

import type { RegistrationRequestParams, RegistrationRequestErrors } from "../actions/registration";

const styles = require("styles/pages/Register.scss");

const mapStateToProps = (state) => {
    const registrationState = getRegistration(state);

    return {
        isLoading: getIsRegistrationInProgress(registrationState),
        registrationErrors: getRegistrationErrors(registrationState),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: function(params) {
        dispatch(registrationRequest(params));
    },
});

type RegisterPageProps = {
    onSubmit: (params: RegistrationRequestParams) => void,
    isLoading: bool,
    registrationErrors: RegistrationRequestErrors
};

const VALIDATION_ERRORS = {
    usernameField: {
        minLength: "Minimum 2 characters",
        maxLength: "Maximum 30 characters",
    },
    emailField: {
        isEmail: "Please enter a valid email address",
        minLength: "Minimum 5 characters",
        maxLength: "Maximum 64 characters",
    },
    passwordField: {
        minLength: "Minimum 6 characters",
    },
};

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
class Register extends React.Component {
    form: MaterialUIForm

    props: RegisterPageProps

    state: {
        canSubmitForm: bool
    }

    onSubmit: () => void
    onFormValid: () => void
    onFormInvalid: () => void
    componentDidUpdate: any

    constructor(props: RegisterPageProps) {
        super(props);
        this.state = {
            canSubmitForm: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onFormValid = this.onFormValid.bind(this);
        this.onFormInvalid = this.onFormInvalid.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidUpdate(previousProps: RegisterPageProps) {
        if (this.props.registrationErrors !== previousProps.registrationErrors) {
            const { username = null, email = null, password = null } = this.props.registrationErrors;
            this.form.updateInputsWithError({username, email, password});
        }
    }

    onFormValid() : void {
        this.setState({ canSubmitForm: true });
    }

    onFormInvalid() : void {
        this.setState({ canSubmitForm: false });
    }

    onSubmit(data: RegistrationRequestParams) : void {
        const params = {
            username: data.username,
            email: data.email,
            password: data.password,
        };
        this.props.onSubmit(params);
    }

    renderLoaderOrSubmitButton() {
        if (this.props.isLoading) {
            return (<CircularProgress size={0.5}/>);
        }

        return (
            <RaisedButton
                primary
                type="submit"
                label="Register"
                disabled={!this.state.canSubmitForm}
                styleName="submit-button"/>
        );
    }

    render() {
        return (
            <Formsy.Form
                onValidSubmit={this.onSubmit}
                onValid={this.onFormValid}
                onInvalid={this.onFormInvalid}
                styleName="register-form"
                ref={form => { this.form = form; } }
            >

                <FormsyText
                    name="username"
                    required
                    validations={{
                        minLength: 2,
                        maxLength: 30,
                    }}
                    validationErrors={VALIDATION_ERRORS.usernameField}
                    hintText="Username"
                    styleName="form-field"
                />

                <FormsyText
                    name="email"
                    required
                    validations={{
                        isEmail: true,
                        minLength: 5,
                        maxLength: 64,
                    }}
                    validationErrors={VALIDATION_ERRORS.emailField}
                    hintText="your@email.com"
                    styleName="form-field"
                />

                <FormsyText
                    name="password"
                    type="password"
                    required
                    validations={{
                        minLength: 6,
                    }}
                    validationErrors={VALIDATION_ERRORS.passwordField}
                    hintText="Password"
                    styleName="form-field"
                />

                {this.renderLoaderOrSubmitButton()}

                <div styleName="links">
                    <Link to="/sign-in" styleName="link">Already have an account?</Link>
                    <Link to="/sign-in" styleName="link">Forgot your password?</Link>
                </div>
            </Formsy.Form>
        );
    }
}

export default Register;
