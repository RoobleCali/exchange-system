import React, { useState } from "react";
import NumberInput from "../../components/controllers/NumberInput";
import Grid from "../../components/Loaders/Grid";

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
      <Grid />
    </>
  );
}

export default index;
