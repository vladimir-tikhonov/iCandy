// @flow

import * as React from "react";
import AppBar from "material-ui/AppBar";
import CSSModules from "react-css-modules";

const styles = require("styles/components/UnauthorizedWrapper.scss");

const UnauthorizedWrapper = (props) => {
    return (
        <div>
            <AppBar title="iCandy - make NakedSelfie great again" showMenuIconButton={false}/>
            <div styleName="content-wrapper">
                {props.children}
            </div>
        </div>
    );
};

export default CSSModules(UnauthorizedWrapper, styles);
