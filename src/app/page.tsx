import About from "@/Components/About";
import Certifications from "@/Components/Certifications";
import Contact from "@/Components/Contact";
import Education from "@/Components/Education";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Resume from "@/Components/Resume";
import Skills from "@/Components/Skills";


export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Certifications></Certifications>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  );
}
