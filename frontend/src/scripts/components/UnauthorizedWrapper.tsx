import * as React from "react";
import AppBar from "material-ui/AppBar";
import * as CSSModules from "react-css-modules";

const styles = require("styles/components/UnauthorizedWrapper.scss");

interface IUnauthorizedWrapper extends React.StatelessComponent<ReactRouter.RouteComponentProps<{}, {}>> {};

const UnauthorizedWrapper: IUnauthorizedWrapper = (props) => {
    return (
        <div styleName="wrapper">
            <AppBar title="iCandy - make NakedSelfie great again" showMenuIconButton={false}/>
            {props.children}
        </div>
    );
};

export default CSSModules(UnauthorizedWrapper, styles) as IUnauthorizedWrapper;
