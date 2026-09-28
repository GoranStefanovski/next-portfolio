import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Highlights from "@/components/highlights";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-devider";
import Skills from "@/components/skills";
import GoogleAnalytics from "@/lib/googleAnalytics";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <GoogleAnalytics />
      <Intro />   
      <SectionDivider />
      <About />   
      <Highlights />
      <Projects />
      <Skills />
      <Experience />
      {/* <Contact /> */}
    </main>
  )
}
