//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const timeOfDayStyle = {
  color: "red"
};

var salutationMessage = "Hello";
const date = new Date();
var currentHour = date.getHours();
console.log(date.getHours());

currentHour = 19;

if (currentHour < 12) {
  salutationMessage = "Good morning!";
  timeOfDayStyle.color = "red";
} else if (currentHour > 11 && currentHour < 18) {
  salutationMessage = "Good afternoon!";
  timeOfDayStyle.color = "green";
} else if (currentHour > 18) {
  salutationMessage = "Good evening!";
  timeOfDayStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={timeOfDayStyle}>
      {salutationMessage}
    </h1>
  </div>,
  document.getElementById("root")
);
