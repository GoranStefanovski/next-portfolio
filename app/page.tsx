import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Highlights from "@/components/highlights";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-devider";
import Skills from "@/components/skills";
import GoogleAnalytics from "@/lib/googleAnalytics";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Goran Stefanovski",
  alternateName: "Tevidma",
  url: "https://tevidma.com",
  image: "https://tevidma.com/og-portrait.jpg",
  jobTitle: "Full-Stack Developer & Team Lead",
  worksFor: {
    "@type": "Organization",
    name: "Mobilen Communications Inc",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bitola",
    addressCountry: "MK",
  },
  knowsAbout: ["React", "React Native", "Next.js", "Laravel", "Project Management"],
  sameAs: ["https://github.com/GoranStefanovski"],
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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
