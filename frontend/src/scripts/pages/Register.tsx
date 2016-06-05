import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class Register extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <TextField hintText="Username"/>
                <br />
                <TextField hintText="Email"/>
                <br />
                <TextField hintText="Password"/>
                <br />
                <RaisedButton primary label="Register" />
            </div>
        );
    }
}

export default Register;
