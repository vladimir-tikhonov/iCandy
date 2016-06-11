import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import * as CSSModules from "react-css-modules";
import { Link } from "react-router";

const styles = require("styles/pages/Register.scss");

@CSSModules(styles)
class Register extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
    public render(): JSX.Element {
        return (
            <div styleName="register-form-wrapper">
                <TextField hintText="Username"/>
                <TextField hintText="Email"/>
                <TextField hintText="Password"/>
                <RaisedButton primary label="Register" />

                <div styleName="links">
                    <Link to="/sign-in" styleName="link">Already have an account?</Link>
                    <Link to="/sign-in" styleName="link">Forgot your password?</Link>
                </div>
            </div>
        );
    }
}

export default Register;
