import Image from "next/image";
import projectsData from "@/data/projects.json";
import { ProjectItem } from "@/types/project";

export default function ProjectsSection() {
  const projects = projectsData as ProjectItem[];

  // Helper function to return label text based on resource type
  const getResourceLabel = (type: string) => {
    switch (type) {
      case "playstore":
        return "Play Store";
      case "appstore":
        return "App Store";
      case "github":
        return "Github";
      default:
        return "Live demo";
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto py-16 px-4 md:px-8 space-y-24"
      id="projects"
    >
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
        Projects
      </h2>

      {projects.map((project, index) => {
        const isOdd = index % 2 === 1;

        return (
          <div
            key={project.id}
            className={`flex flex-col gap-12 lg:items-center ${
              isOdd ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* 1. Large Screenshot */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <h2 className="text-3xl font-semibold mb-6 lg:mb-8 dark:text-white">
                {project.title}
              </h2>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                  priority={index === 0}
                />
              </div>
            </div>

            {/* 2. Project Details */}
            <div className="w-full lg:w-1/2 space-y-8 lg:pl-12">
              {/* Overview */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Overview
                </h4>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Tech stack
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-base text-emerald-600 dark:text-emerald-400 font-medium">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Resources Buttons */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Resources
                </h4>
                <div className="flex flex-wrap gap-4 pt-1">
                  {project.resources.map((link, idx) => (
                    <a
                      key={`${link.type}-${idx}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-lg text-base font-medium 
                                 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-800 
                                 text-white transition-colors shadow-sm"
                    >
                      {getResourceLabel(link.type)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Centered Button at End linking to GitHub */}
      <div className="flex justify-center pt-8">
        <a
          href="https://github.com/Bornmajor"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-xl text-base font-semibold 
                     bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-800 
                     text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          View other projects
        </a>
      </div>
    </section>
  );
}
