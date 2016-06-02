import * as React from "react";
import * as ReactDom from "react-dom";

import Routes from "./scripts/components/Routes";

import "style!css!react-virtualized/styles.css";

ReactDom.render(<Routes />, document.getElementById("main"));
