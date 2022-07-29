import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";

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
  isEnabled: (id: string) => void;
}

const VlagContext = createContext<VlagContextType>({
  isEnabled: () => undefined,
});

export const VlagProvider = ({ children, flags }: VlagProps) => {
  const [flag, setFlag] = useState(flags);

  const isEnabled = (id: string) => {
    return id;
  };

  return (
    <VlagContext.Provider value={{ isEnabled }}>
      {children}
    </VlagContext.Provider>
  );
};

export const useVlag = () => useContext(VlagContext);
