import * as React from "react";
import * as ReactDom from "react-dom";

import "style!css!react-virtualized/styles.css";

import { VirtualScroll } from "react-virtualized";

const Hello = () => {
  return <h1>Hello world!</h1>;
};

ReactDom.render(
  <VirtualScroll
    width={300}
    height={300}
    rowCount={120}
    rowHeight={60}
    rowRenderer={
      () => <Hello />
    }
  />, document.getElementById("main"));
