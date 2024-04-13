import NavBar from "@/components/Navbar";
import { atom, useAtom } from "jotai";
import * as React from "react";


interface NavBarContextStore {
  height: number;
}

export const navbarAtom = atom<NavBarContextStore>({height: 80});

export default function Layout({children} : {children: React.ReactNode}) {

  const [height, setHeight] = useAtom(navbarAtom);
  const onHeightChange = React.useCallback((newHeight : number) => {
    setHeight({height: newHeight});
  }, []);

  return (
    <>
      <NavBar onHeightChange={onHeightChange}/>
      {children}
    </>
  )
}