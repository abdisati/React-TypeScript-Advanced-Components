type ContainerProps = {
  as: React.ElementType;
};

const Container = (props: ContainerProps) => {
  const { as } = props;
  const Component = as;
  return <Component />;
};

export default Container;
