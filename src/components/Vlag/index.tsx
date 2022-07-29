import React from "react";
import { useVlag } from "../../libs/context";
interface VlagProps {
  name: string;
  children: React.ReactNode;
}

const Vlag: React.FC<VlagProps> = (props) => {
  const ff = useVlag();
  const isActive = ff.isEnabled(props.name);
  return <>{props.children}</>;
};

export default Vlag;
