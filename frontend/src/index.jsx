import * as React from "react";
import * as ReactDom from "react-dom";
import "babel-polyfill";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import createSagaMiddleware from "redux-saga";

import Routes from "./scripts/components/Routes";
import reducer from "./scripts/reducers/reducer";
import saga from "./scripts/sagas/saga";

import "style!css!react-virtualized/styles.css";

injectTapEventPlugin();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, compose (
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddleware.run(saga);

const Root = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <Routes store={store} />
        </Provider>
    </MuiThemeProvider>
);

ReactDom.render(<Root />, document.getElementById("main"));
