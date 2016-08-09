// @flow

import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Formsy from "formsy-react";
import TextField from "../components/inputs/TextField";
import CSSModules from "react-css-modules";
import { Link } from "react-router";
import { connect } from "react-redux";

import { signInRequest } from "../actions/sign_in";
import { getIsSignInInProgress, getSignInErrors } from "../reducers/sign_in";
import { getSignIn } from "../reducers/reducer";

import type { SignInRequestParams, SignInRequestErrors } from "../actions/sign_in";

const styles = require("styles/pages/SignIn.scss");

const VALIDATION_ERRORS = {
    usernameOrEmailField: {
        minLength: "Minimum 2 characters",
        maxLength: "Maximum 30 characters",
    },
    passwordField: {
        minLength: "Minimum 6 characters",
    },
};

const mapStateToProps = (state) => {
    const signInState = getSignIn(state);

    return {
        isLoading: getIsSignInInProgress(signInState),
        signInErrors: getSignInErrors(signInState),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: params => dispatch(signInRequest(params)),
});

type SignInPageProps = {
    onSubmit: (params: SignInRequestParams) => void,
    isLoading: bool,
    signInErrors: SignInRequestErrors
};

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
class SignIn extends React.Component {
    form: MaterialUIForm

    props: SignInPageProps

    onSubmit: () => void

    constructor(props: SignInPageProps) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    shouldComponentUpdate(nextProps: SignInPageProps) {
        return nextProps.isLoading !== this.props.isLoading ||
            nextProps.signInErrors !== this.props.signInErrors;
    }

    componentDidUpdate(previousProps: SignInPageProps) {
        const { usernameOrEmail = null, password = null } = this.props.signInErrors;
        this.form.updateInputsWithError({usernameOrEmail, password});
    }

    onSubmit(data: SignInRequestParams) : void {
        const params = {
            usernameOrEmail: data.usernameOrEmail,
            password: data.password,
        };
        this.props.onSubmit(params);
    }

    render() {
        return (
            <Formsy.Form
                onValidSubmit={this.onSubmit}
                styleName="sign-in-form"
                ref={form => { this.form = form; } }
            >

                <TextField
                    name="usernameOrEmail"
                    required
                    validations={{
                        minLength: 2,
                        maxLength: 30,
                    }}
                    validationErrors={VALIDATION_ERRORS.usernameOrEmailField}
                    hintText="Username or email"
                    styleName="form-field"
                />

                <TextField
                    name="password"
                    type="password"
                    autoComplete={false}
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
                    label="Sign In"
                    disabled={this.props.isLoading}
                    styleName="submit-button"/>

                <div styleName="links">
                    <Link to="/register" styleName="link">Don't have an account?</Link>
                    <Link to="/register" styleName="link">Forgot your password?</Link>
                </div>
            </Formsy.Form>
        );
    }
}

export default SignIn;
