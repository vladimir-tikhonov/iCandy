import * as React from "react";
import * as CSSModules from "react-css-modules";

const styles = require("styles/components/AuthorizedWrapper.scss");

interface IAuthorizedWrapper extends React.StatelessComponent<ReactRouter.RouteComponentProps<{}, {}>> {};

const AuthorizedWrapper: IAuthorizedWrapper = (props) => {
    return (
        <div styleName="wrapper">
            <h1>Application</h1>
            {props.children}
        </div>
    );
};

export default CSSModules(AuthorizedWrapper, styles) as IAuthorizedWrapper;
