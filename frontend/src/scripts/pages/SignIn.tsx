import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import * as CSSModules from "react-css-modules";
import { Link } from "react-router";

const styles = require("styles/pages/SignIn.scss");

@CSSModules(styles)
class SignIn extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
    public render(): JSX.Element {
        return (
            <div styleName="sign-in-form-wrapper">
                <TextField hintText="Username or email"/>
                <TextField hintText="Password"/>
                <RaisedButton primary label="Sign in" />

                <div styleName="links">
                    <Link to="/register" styleName="link">Don't have an account?</Link>
                    <Link to="/register" styleName="link">Forgot your password?</Link>
                </div>
            </div>
        );
    }
}

export default SignIn;
