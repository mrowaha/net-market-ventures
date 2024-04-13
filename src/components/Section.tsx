import { navbarAtom } from "@/layout";
import { useAtom } from "jotai";
import * as React from "react";
import { useInView } from "framer-motion";

interface SectionProps extends React.PropsWithChildren {
  id: string
}

export default function Section(props: SectionProps) {

  const [navbar, _] = useAtom(navbarAtom);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  return (
    <section ref={sectionRef} id={props.id} style={{scrollMarginTop: `${navbar.height}px`}}>
      {props.children}
     </section>
  )
}