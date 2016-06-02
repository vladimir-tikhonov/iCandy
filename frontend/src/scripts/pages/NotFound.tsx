import * as React from "react";

class NotFound extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
    public render(): JSX.Element {
        return (
            <h2>404 :(</h2>
        );
    }
}

export default NotFound;
