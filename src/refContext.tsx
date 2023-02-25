import React, { useContext, createRef, useRef } from 'react';
import { refsContextValues } from './types/refsContextType';

const RefsContext = React.createContext<refsContextValues>({
  navRef: createRef<HTMLDivElement>(),
  heroRef: createRef<HTMLDivElement>(),
  aboutRef: createRef<HTMLDivElement>(),
  projectsRef: createRef<HTMLDivElement>(),
  formRef: createRef<HTMLDivElement>(),
});

const RefsProvider = ({ children }: { children: React.ReactNode }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <RefsContext.Provider
      value={{
        navRef,
        heroRef,
        aboutRef,
        projectsRef,
        formRef,
      }}
    >
      {children}
    </RefsContext.Provider>
  );
};

export const useRefsContext = () => {
  return useContext(RefsContext);
};

export { RefsContext, RefsProvider };
