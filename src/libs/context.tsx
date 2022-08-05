import React, { createContext } from "react";
import { useCookies } from "react-cookie";

interface VlagPropsType {
  id: string;
  name: string;
  description?: string;
  helperText?: string;
  disabled: boolean;
}

type VlagProps = {
  children: React.ReactNode;
  flags: Array<VlagPropsType>;
};

interface VlagContextType {
  isEnabled: (id: string) => boolean;
  setEnable: (id: string) => void;
  getFlags: () => void;
}

const VlagContext = createContext<VlagContextType>({
  isEnabled: () => false,
  setEnable: () => undefined,
  getFlags: () => undefined,
});

export const VlagProvider = ({ children, flags }: VlagProps) => {
  const flagMap = flags.map((fl) => fl.id);
  const [cookies, setCookie] = useCookies(flagMap);

  const isEnabled = (id: string) => {
    return cookies[id] === "true";
  };

  const setEnable = (id: string) => {
    setCookie(id, true);
  };

  const getFlags = () => {
    return flags;
  };

  return (
    <VlagContext.Provider value={{ isEnabled, setEnable, getFlags }}>
      {children}
    </VlagContext.Provider>
  );
};

export const useVlag = () => React.useContext(VlagContext);
