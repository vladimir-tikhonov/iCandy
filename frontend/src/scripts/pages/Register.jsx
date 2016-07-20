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
import {getIsRegistrationInProgress} from "../reducers/registration";
import {getRegistration} from "../reducers/reducer";

import type { RegistrationRequestParams } from "../actions/registration";

const styles = require("styles/pages/Register.scss");

const mapStateToProps = (state) => ({
    isLoading: getIsRegistrationInProgress(getRegistration(state)),
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: function(params) {
        dispatch(registrationRequest(params));
    },
});

type RegisterPageProps = {
    onSubmit: (params: RegistrationRequestParams) => void,
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
    usernameInput: MaterialUIIntput
    emailInput: MaterialUIIntput
    passwordInput: MaterialUIIntput

    props: RegisterPageProps

    state: {
        canSubmitForm: bool
    }

    onSubmit: () => void
    onFormValid: () => void
    onFormInvalid: () => void

    constructor(props: RegisterPageProps) {
        super(props);
        this.state = {
            canSubmitForm: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onFormValid = this.onFormValid.bind(this);
        this.onFormInvalid = this.onFormInvalid.bind(this);
    }

    onFormValid() : void {
        this.setState({ canSubmitForm: true });
    }

    onFormInvalid() : void {
        this.setState({ canSubmitForm: false });
    }

    onSubmit() : void {
        const params = {
            username: this.usernameInput.getValue(),
            email: this.emailInput.getValue(),
            password: this.passwordInput.getValue(),
        };
        this.props.onSubmit(params);
    }

    renderLoaderOrSubmitButton() {
        if (this.props.isLoading) {
            return (<CircularProgress size={0.5}/>);
        } else {
            return (
                <RaisedButton
                    primary
                    type="submit"
                    label="Register"
                    disabled={!this.state.canSubmitForm}
                    styleName="submit-button"/>
            );
        }
    }

    render() {
        return (
            <Formsy.Form
                onValidSubmit={this.onSubmit}
                onValid={this.onFormValid}
                onInvalid={this.onFormInvalid}
                styleName="register-form"
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
                    ref={input => { this.usernameInput = input; } }
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
                    ref={input => { this.emailInput = input; } }
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
                    ref={input => { this.passwordInput = input; } }
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
