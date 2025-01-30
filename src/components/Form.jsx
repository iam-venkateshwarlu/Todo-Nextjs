"use client";

import React from "react";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // reset the form
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
          required
        />
      </label>
      <button type="submit">
        <span className="visually-hidden">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
}

export default Form;
