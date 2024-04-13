import { navbarAtom } from "@/layout";
import { useAtom } from "jotai";
import * as React from "react";

interface SectionProps extends React.PropsWithChildren {
  id: string
}

export default function Section(props: SectionProps) {

  const [navbar, _] = useAtom(navbarAtom);

  return (
    <section id={props.id} style={{scrollMarginTop: `${navbar.height}px`}}>
      {props.children}
     </section>
  )
}