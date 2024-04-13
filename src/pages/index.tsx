import About from "@/components/About";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Section id="home">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="services">
        <Services/>
      </Section>
      <Section id="contact">

      </Section>
    </>
  );
}