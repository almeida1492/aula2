import React from "react";
import "./app.css";

export function App({ title }: { title: string }) {
  /**
   * This is not HTML, this is JSX!
   */

  return (
    <div className="container">
      <h1>{title}</h1>
      <input placeholder="username" />
    </div>
  );
}
