import React, { useState } from "react";
import NumberInput from "../../components/controllers/NumberInput";

function index() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
  });
  const [state1, setState1] = React.useState({
    firstName: state.firstName,
    lastName: state.lastName,
  });
  console.log(state1.firstName + " " + state1.lastName);
  const handle = (e) => {
    e.preventDefault();
    console.log(state);
  };
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  return (
    <>
      <form onSubmit={handle}>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </label>
        {state.firstName && (
          <input
            type="text"
            name="firstName"
            value={state1.firstName.value}
            onChange={handleChange}
          />
        )}
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default index;
