import * as React from "react";
import * as ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Routes from "./scripts/components/Routes";
import reducer from "./scripts/reducers/reducer";

import "style!css!react-virtualized/styles.css";

const store = createStore(reducer);

const Root = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

ReactDom.render(<Root />, document.getElementById("main"));
