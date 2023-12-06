import React from "react";
import "./app.css";

export function App({ title }: { title: string }) {
  /**
   * This is not HTML, this is JSX!
   */

  return (
    <div className="container">
      <h1>This is the branch claudia</h1>
      <div>This is a change that exists only in the branch called claudia</div>
      <input placeholder="username" />
    </div>
  );
}
