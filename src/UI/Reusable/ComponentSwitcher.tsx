import { ReactElement } from "react";

interface ComponentSwitcherProps {
  active: string;
  children: ReactElement[];
}

function ComponentSwitcher({
  active,
  children,
}: ComponentSwitcherProps): ReactElement {
  return children.filter((child: ReactElement) => child.key === active)[0];
}

export default ComponentSwitcher;
