import React from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";

const Price = ({ control, index }) => {
  const value = useWatch({
    control,
    name: `items[${index}]`,
    defaultValue: {},
  });
  return <span>{(value.type || 0) * (value.amount || 0)}</span>;
};

const PriceTotal = ({ control }) => {
  const value = useWatch({
    control,
    name: `items`,
    defaultValue: {},
  });

  console.log(value);
  return null;
};

export default function index() {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      {fields.map(({ id, name }, index) => (
        <input key={id} name={name} type="text" ref={register} />
      ))}

      <input type="submit" />

      <PriceTotal control={control} />
      <button></button>
    </form>
  );
}
