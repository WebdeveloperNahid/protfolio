import About from "@/Components/About";
import Certifications from "@/Components/Certifications";
import Education from "@/Components/Education";
import Hero from "@/Components/Hero";
import Skills from "@/Components/Skills";


export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Certifications></Certifications>
    </div>
  );
}
