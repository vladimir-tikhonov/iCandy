// @flow

import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import CircularProgress from "material-ui/CircularProgress";
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

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
class Register extends React.Component {
    props: {
        onSubmit: (params: RegistrationRequestParams) => void,
    };

    onSubmit() : void {
        const params = {
            username: "123",
            email: "123",
            password: "123",
        };
        this.props.onSubmit(params);
    }

    renderSubmitButton() {
        if (this.props.isLoading) {
            return (<CircularProgress size={0.5}/>);
        } else {
            return (<RaisedButton primary label="Register" styleName="submit-button" onClick={this.onSubmit.bind(this)}/>);
        }
    }

    render() {
        return (
            <div styleName="register-form-wrapper">
                <TextField hintText="Username"/>
                <TextField hintText="Email"/>
                <TextField hintText="Password"/> {this.renderSubmitButton()}

                <div styleName="links">
                    <Link to="/sign-in" styleName="link">Already have an account?</Link>
                    <Link to="/sign-in" styleName="link">Forgot your password?</Link>
                </div>
            </div>
        );
    }
}

export default Register;
