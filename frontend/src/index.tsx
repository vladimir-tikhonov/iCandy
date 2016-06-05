import * as React from "react";
import * as ReactDom from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import Routes from "./scripts/components/Routes";
import reducer from "./scripts/reducers/reducer";

import "style!css!react-virtualized/styles.css";

interface WindowsWithReduxDevTools extends Window {
    devToolsExtension(): () => any;
}

declare var window: WindowsWithReduxDevTools;

const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

const Root = () => (
    <Provider store={store}>
        <Routes store={store} />
    </Provider>
);

ReactDom.render(<Root />, document.getElementById("main"));
