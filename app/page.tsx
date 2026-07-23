import CaseStudiesSection from "@/components/ui/sections/case_studies";
import Experiences from "@/components/ui/sections/experiences";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/ui/sections/intro";
import ProjectsSection from "@/components/ui/sections/projects";
import SkillsSection from "@/components/ui/sections/skills";

export default function Home() {
  return (
    <main>
     <Intro />
     <Experiences />
     <ProjectsSection />
     <CaseStudiesSection />
     <SkillsSection />
     <Footer />
    </main>
  );
}
