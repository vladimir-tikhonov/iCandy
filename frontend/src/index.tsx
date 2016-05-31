import * as React from "react";
import * as ReactDom from "react-dom";

const Hello = () => {
  return <h1>Hello world!</h1>;
};

ReactDom.render(<Hello />, document.getElementById("main"));
