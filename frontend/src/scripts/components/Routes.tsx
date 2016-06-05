import * as React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import App from "./App";
import Feed from "../pages/Feed";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

import NotFound from "../pages/NotFound";

const Routes = ({store}) => {
    return (
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            <Route path="/" component={App}>
                <IndexRoute component={Feed} />
                <Route path="register" component={Register} />
                <Route path="sign-in" component={SignIn} />
            </Route>
            <Route path="*" component={NotFound}/>
        </Router>
    );
};

export default Routes;
