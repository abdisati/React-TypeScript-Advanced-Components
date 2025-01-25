type ButtonProps = {
  el: "button";
} & React.ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & React.ComponentPropsWithoutRef<"a">;

const Button = (props: ButtonProps | AnchorProps) => {
  if (props.el === "anchor") {
    return (
      <a className="button" {...props}>
        A Link
      </a>
    );
  }
  return (
    <button className="button" {...props}>
      Click me
    </button>
  );
};

export default Button;
