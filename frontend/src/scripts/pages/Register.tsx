import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import CircularProgress from "material-ui/CircularProgress";
import * as CSSModules from "react-css-modules";
import { Link } from "react-router";
import { connect } from "react-redux";

import { registrationRequest, IRequestRegistrationParams } from "../actions/registration";
import { getIsRegistrationInProgress } from "../reducers/registration";
import { IApplicationState, getRegistration } from "../reducers/reducer";

const styles = require("styles/pages/Register.scss");

interface IConnectedProps {
    isLoading: boolean;
}

const mapStateToProps: (state: IApplicationState) => IConnectedProps = (state) => ({
    isLoading: getIsRegistrationInProgress(getRegistration(state)),
});

interface IDispatchProps {
    onSubmit: (params: IRequestRegistrationParams) => void;
}

const mapDispatchToProps: (dispatch: any) => IDispatchProps = (dispatch) => ({
    onSubmit: function (params: IRequestRegistrationParams) {
        dispatch(registrationRequest(params));
    },
});

@CSSModules(styles)
class Register extends React.Component<IConnectedProps & IDispatchProps, {}> {
    private onSubmit(): void {
        const params = {
            username: "123",
            email: "123",
            password: "123",
        };
        this.props.onSubmit(params);
    }

    private renderSubmitButton(): JSX.Element {
        if (this.props.isLoading) {
            return (
                <CircularProgress size={0.5} />
            );
        } else {
            return (
                <RaisedButton
                    primary
                    label="Register"
                    className={styles["submit-button"]}
                    onClick={this.onSubmit.bind(this)} />
            );
        }
    }

    public render(): JSX.Element {
        return (
            <div styleName="register-form-wrapper">
                <TextField hintText="Username"/>
                <TextField hintText="Email"/>
                <TextField hintText="Password"/>
                {this.renderSubmitButton()}

                <div styleName="links">
                    <Link to="/sign-in" styleName="link">Already have an account?</Link>
                    <Link to="/sign-in" styleName="link">Forgot your password?</Link>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
