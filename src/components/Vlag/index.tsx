import React from "react";
import { useVlag } from "../../libs/context";
interface VlagProps {
  name: string;
  children: (isActive: boolean) => React.ReactElement;
}

const Vlag: React.FC<VlagProps> = (props) => {
  const ff = useVlag();
  return props.children(ff.isEnabled(props.name));
};

export default Vlag;
