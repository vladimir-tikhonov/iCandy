import * as React from "react";
import * as ReactDom from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import Routes from "./scripts/components/Routes";
import reducer from "./scripts/reducers/reducer";

import "style!css!react-virtualized/styles.css";

injectTapEventPlugin();

interface WindowsWithReduxDevTools extends Window {
    devToolsExtension(): () => any;
}

declare var window: WindowsWithReduxDevTools;

const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

const Root = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <Routes store={store} />
        </Provider>
    </MuiThemeProvider>
);

ReactDom.render(<Root />, document.getElementById("main"));
