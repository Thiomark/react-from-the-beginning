import React from "react";

export default function MainSection() {
  const firstName = "Thio";
  const lastName = "Mark";
  // Adding javascript we use {}

  // We use an object to add inline style to anything
  const inlineStyle = {
    backgroundColor: "gray",
    color: "orangered",
    fontSize: "14px",
  };

  return (
    <main style={inlineStyle}>
      <h1>Hello my name is {firstName + " " + lastName}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
        temporibus aliquam fugit placeat, sit iste assumenda illo quo
        perspiciatis nemo.
      </p>
    </main>
  );
}
