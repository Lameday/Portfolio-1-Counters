import React from "react";
import "./Body.css";

export default function App() {
  return (
    <div class="container" id="container">
      <h3>COUNTERS APP</h3>
      <hr />
      <h2>ADD COUNTER NAME</h2>
      <input
        class="inputs"
        type="text"
        name="fname"
        id="name-input"
        required=""
      />
      <h2>ADD DATE</h2>
      <input
        class="inputs"
        type="datetime-local"
        name="fname"
        id="date-input"
      />
      <button class="add-button" id="add-button">
        ADD COUNTER
      </button>
      <h2>YOUR COUNTERS</h2>
    </div>
  );
}
