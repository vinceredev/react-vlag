import React, { createContext } from 'react';
import { useCookies } from 'react-cookie';

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
  setEnable: (id: string, val: boolean) => void;
  getFlags: () => Array<VlagPropsType>;
  flagMap: Array<string>;
}

const VlagContext = createContext<VlagContextType>({
  isEnabled: () => false,
  setEnable: () => undefined,
  getFlags: () => [],
  flagMap: []
});

export const VlagProvider = ({ children, flags }: VlagProps) => {
  const flagMap = flags.map((fl) => fl.id);
  const [cookies, setCookie] = useCookies(flagMap);

  const isEnabled = (id: string) => {
    return cookies[id] === 'true';
  };

  const setEnable = (id: string, val: boolean) => {
    setCookie(id, val);
  };

  const getFlags = () => {
    return flags;
  };

  let hasDuplicate = flagMap.some((val, i) => flagMap.indexOf(val) !== i);
  if (hasDuplicate) {
    return <>flag id is duplicate</>;
  }

  return (
    <VlagContext.Provider value={{ isEnabled, setEnable, getFlags, flagMap }}>
      {children}
    </VlagContext.Provider>
  );
};

export const useVlag = () => React.useContext(VlagContext);
