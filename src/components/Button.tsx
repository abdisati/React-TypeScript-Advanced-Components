type ButtonProps = React.ComponentPropsWithoutRef<"button"> & { href?: never };

type AnchorProps = React.ComponentPropsWithoutRef<"a"> & { href?: string };

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

const Button = (props: ButtonProps | AnchorProps) => {
  if (isAnchorProps(props)) {
    const { children, ...rest } = props;
    return (
      <a className="button" {...rest}>
        {children}
      </a>
    );
  }
  return <button className="button" {...props} />;
};
export default Button;
