import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => react element - js object => HTML element(by render)
// const heading = React.createElement("h1", { id: "heading" }, "Learning React");

// console.log(heading);

// JSX => React.createElement (by BABEL) => react element - js object => HTML element(by render)
// const jsxHeading = <h1 className="headind">helllo i'm jsx code🤷‍♂️</h1>;
// console.log(jsxHeading);

const Title = () => (
  <h1>i am componemt going to be called in another component</h1>
);
const SubHeading = (
  <span>i am span react element and can go inside componemt</span>
);
const HeadindComponent = () => (
  // <>
  //   <div id="container">
  //     <Title />
  //     <h1 className="hcomponemt"> i' am functional component </h1>
  //   </div>
  //   <div id="container2">
  //     <Title />
  //     <h1 className="hcomponemt"> i' am functional component </h1>
  //   </div>
  // </>
  <div id="container">
    {Title()}
    <Title></Title>
    <Title />
    {SubHeading}
    <h1 className="hcomponemt"> i' am functional component </h1>{" "}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadindComponent />);
