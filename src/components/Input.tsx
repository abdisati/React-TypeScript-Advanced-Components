import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, id, ...restprops } = props;
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...restprops} ref={ref} />
    </p>
  );
});

export default Input;
