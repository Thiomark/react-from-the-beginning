import React from "react";
import ReactDOM from "react-dom";
const theRoot = document.getElementById("root");

ReactDOM.render(<MyInfo />, theRoot);

function MyInfo() {
  return (
    <div>
      <h1>Hi, my name is Itumeleng</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta
        officia praesentium quas eum hic.
      </p>
      <ul>
        <li>Something 1</li>
        <li>Something 2</li>
        <li>Something 3</li>
      </ul>
    </div>
  );
}
