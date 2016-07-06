// @flow

import * as React from "react";
import CSSModules from "react-css-modules";

const styles = require("styles/components/AuthorizedWrapper.scss");

const AuthorizedWrapper = (props) => {
    return (
        <div>
            <h1>Application</h1>
            {props.children}
        </div>
    );
};

export default CSSModules(AuthorizedWrapper, styles);
