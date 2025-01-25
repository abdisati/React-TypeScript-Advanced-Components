import { ComponentPropsWithoutRef } from "react";

interface InputProps {
  label: string;
  id: string;
}

const Input = (props: InputProps & ComponentPropsWithoutRef<"input">) => {
  const { label, id, ...restprops } = props;
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...restprops} />
    </p>
  );
};

export default Input;
