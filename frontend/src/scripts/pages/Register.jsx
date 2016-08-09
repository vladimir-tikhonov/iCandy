// @flow

import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Formsy from "formsy-react";
import TextField from "../components/inputs/TextField";
import CSSModules from "react-css-modules";
import { Link } from "react-router";
import { connect } from "react-redux";

import { registrationRequest } from "../actions/registration";
import { getIsRegistrationInProgress, getRegistrationErrors } from "../reducers/registration";
import { getRegistration } from "../reducers/reducer";

import type { RegistrationRequestParams, RegistrationRequestErrors } from "../actions/registration";

const styles = require("styles/pages/Register.scss");

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

const mapStateToProps = (state) => {
    const registrationState = getRegistration(state);

    return {
        isLoading: getIsRegistrationInProgress(registrationState),
        registrationErrors: getRegistrationErrors(registrationState),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: params => dispatch(registrationRequest(params)),
});

type RegisterPageProps = {
    onSubmit: (params: RegistrationRequestParams) => void,
    isLoading: bool,
    registrationErrors: RegistrationRequestErrors
};

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
class Register extends React.Component {
    form: MaterialUIForm

    props: RegisterPageProps

    onSubmit: () => void

    constructor(props: RegisterPageProps) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    shouldComponentUpdate(nextProps: RegisterPageProps) {
        return nextProps.isLoading !== this.props.isLoading ||
            nextProps.registrationErrors !== this.props.registrationErrors;
    }

    componentDidUpdate(previousProps: RegisterPageProps) {
        const { username = null, email = null } = this.props.registrationErrors;
        this.form.updateInputsWithError({username, email});
    }

    onSubmit(data: RegistrationRequestParams) : void {
        const params = {
            username: data.username,
            email: data.email,
            password: data.password,
        };
        this.props.onSubmit(params);
    }

    render() {
        return (
            <Formsy.Form
                onValidSubmit={this.onSubmit}
                styleName="register-form"
                ref={form => { this.form = form; } }
            >

                <TextField
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

                <TextField
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

                <TextField
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

                <RaisedButton
                    primary
                    type="submit"
                    label="Register"
                    disabled={this.props.isLoading}
                    styleName="submit-button"/>

                <div styleName="links">
                    <Link to="/sign-in" styleName="link">Already have an account?</Link>
                    <Link to="/sign-in" styleName="link">Forgot your password?</Link>
                </div>
            </Formsy.Form>
        );
    }
}

export default Register;
