interface InputProps {
  label: string;
  id: string;
}

const Input = (props: InputProps) => {
  const { label, id } = props;
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </p>
  );
};

export default Input;
