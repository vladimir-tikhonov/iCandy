import * as React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { UserAuthWrapper } from "redux-auth-wrapper";
import { getCurrentUser } from "../reducers/reducer";

import App from "./App";
import Feed from "../pages/Feed";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";

import NotFound from "../pages/NotFound";

const UserIsAuthenticated = UserAuthWrapper({
    authSelector: getCurrentUser,
    wrapperDisplayName: "UserIsAuthenticated",
    failureRedirectPath: "sign-in",
});

const Routes = ({store}) => {
    return (
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            <Route path="/" component={UserIsAuthenticated(App)}>
                <IndexRoute component={Feed} />
            </Route>
            <Route path="register" component={Register} />
            <Route path="sign-in" component={SignIn} />

            <Route path="*" component={NotFound}/>
        </Router>
    );
};

export default Routes;
