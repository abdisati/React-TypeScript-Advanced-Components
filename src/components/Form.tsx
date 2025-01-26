import { ComponentPropsWithoutRef, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export default function Form(props: FormProps) {
  const form = useRef<HTMLFormElement>(null);

  const { onSave, children, ...rest } = props;
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...rest} ref={form}>
      {children}
    </form>
  );
}
