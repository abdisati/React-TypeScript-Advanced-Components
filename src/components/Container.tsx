import React from "react";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const Container = <T extends React.ElementType>(props: ContainerProps<T>) => {
  const { as, children, ...restprops } = props;
  const Component = as || "div";
  return <Component {...restprops}>{children}</Component>;
};

export default Container;
