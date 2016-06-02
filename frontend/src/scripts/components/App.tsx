import * as React from "react";

const App: React.StatelessComponent<ReactRouter.RouteComponentProps<{}, {}>> = (props) => {
    return (
        <div>
            <h1>Application</h1>
            {props.children}
        </div>
    );
};

export default App;
