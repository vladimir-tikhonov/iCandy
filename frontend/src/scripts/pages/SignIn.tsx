import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import * as CSSModules from "react-css-modules";

const styles = require("styles/pages/SignIn.scss");

@CSSModules(styles)
class SignIn extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
    public render(): JSX.Element {
        return (
            <div styleName="sign-in-form-wrapper">
                <TextField hintText="Username or email"/>
                <br />
                <TextField hintText="Password"/>
                <br />
                <RaisedButton primary label="Sign in" />
            </div>
        );
    }
}

export default SignIn;
