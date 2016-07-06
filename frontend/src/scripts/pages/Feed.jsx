import * as React from "react";
import {VirtualScroll} from "react-virtualized";

const Hello = () => {
    return <h1>Hello world!</h1>;
};

class Feed extends React.Component {
    render() {
        return (
            <VirtualScroll width={300} height={300} rowCount={120} rowHeight={60} rowRenderer={() => <Hello/>}/>
        );
    }
}

export default Feed;
