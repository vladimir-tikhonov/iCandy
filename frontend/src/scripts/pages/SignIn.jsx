// @flow

import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import Formsy from "formsy-react";
import { FormsyText } from "formsy-material-ui/lib";
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

type SignInPageState = {
    canSubmitForm: bool
};

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
class SignIn extends React.Component {
    form: MaterialUIForm

    props: SignInPageProps

    state: SignInPageState

    onSubmit: () => void
    onFormValid: () => void
    onFormInvalid: () => void

    constructor(props: SignInPageProps) {
        super(props);
        this.state = {
            canSubmitForm: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onFormValid = this.onFormValid.bind(this);
        this.onFormInvalid = this.onFormInvalid.bind(this);
    }

    shouldComponentUpdate(nextProps: SignInPageProps, nextState: SignInPageState) {
        return nextProps.isLoading !== this.props.isLoading ||
            nextProps.signInErrors !== this.props.signInErrors ||
            nextState.canSubmitForm !== this.state.canSubmitForm;
    }

    componentDidUpdate(previousProps: SignInPageProps) {
        const { usernameOrEmail = null } = this.props.signInErrors;
        this.form.updateInputsWithError({usernameOrEmail});
    }

    onFormValid() : void {
        this.setState({ canSubmitForm: true });
    }

    onFormInvalid() : void {
        this.setState({ canSubmitForm: false });
    }

    onSubmit(data: SignInRequestParams) : void {
        const params = {
            usernameOrEmail: data.usernameOrEmail,
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
                label="Sign In"
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
                styleName="sign-in-form"
                ref={form => { this.form = form; } }
            >

                <FormsyText
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
                    <Link to="/register" styleName="link">Don't have an account?</Link>
                    <Link to="/register" styleName="link">Forgot your password?</Link>
                </div>
            </Formsy.Form>
        );
    }
}

export default SignIn;
