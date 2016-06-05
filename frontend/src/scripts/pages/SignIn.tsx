import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";

class SignIn extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
    public render(): JSX.Element {
        return (
            <RaisedButton label="Sign in!" />
        );
    }
}

export default SignIn;
