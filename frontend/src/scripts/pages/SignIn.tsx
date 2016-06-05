import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class SignIn extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
    public render(): JSX.Element {
        return (
            <div>
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
