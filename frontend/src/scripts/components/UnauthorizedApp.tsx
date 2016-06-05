import * as React from "react";
import AppBar from "material-ui/AppBar";

const UnauthorizedApp: React.StatelessComponent<ReactRouter.RouteComponentProps<{}, {}>> = (props) => {
    return (
        <div>
            <AppBar title="iCandy - make NakedSelfie great again" showMenuIconButton={false}/>
            {props.children}
        </div>
    );
};

export default UnauthorizedApp;
