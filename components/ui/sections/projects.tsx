"use client";

import { useState } from "react";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import { ProjectItem, ProjectLane } from "@/types/project";

type Filter = "all" | ProjectLane;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "mobile", label: "Mobile" },
  { value: "web", label: "Web" },
  { value: "backend", label: "Backend" },
];

const LANE_LABELS: Record<ProjectLane, string> = {
  mobile: "Mobile",
  web: "Web",
  backend: "Backend",
};

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

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const allProjects = projectsData as ProjectItem[];
  const projects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.lanes.includes(filter));

  return (
    <section
      className="max-w-7xl mx-auto py-16 px-4 md:px-8 space-y-24 scroll-mt-20"
      id="projects"
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          Projects
        </h2>

        {/* Lane filter */}
        <div
          className="flex flex-wrap justify-center gap-3"
          role="group"
          aria-label="Filter projects by area"
        >
          {FILTERS.map(({ value, label }) => {
            const active = filter === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  active
                    ? "bg-emerald-600 border-emerald-600 text-white dark:bg-emerald-700 dark:border-emerald-700"
                    : "border-emerald-600 text-emerald-700 hover:bg-emerald-600/10 dark:border-emerald-500 dark:text-emerald-400"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

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
              <h3 className="text-3xl font-semibold mb-3 dark:text-white">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
                {project.lanes.map((lane) => (
                  <span
                    key={lane}
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-600/10 text-emerald-700 dark:text-emerald-400"
                  >
                    {LANE_LABELS[lane]}
                  </span>
                ))}
              </div>
              <div
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
                style={project.imageBg ? { backgroundColor: project.imageBg } : undefined}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={
                      project.imageFit === "contain"
                        ? "object-contain"
                        : "object-cover object-top"
                    }
                    priority={index === 0}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-surface p-6 text-center">
                    <span className="text-3xl font-semibold text-muted-foreground">
                      {project.title}
                    </span>
                  </div>
                )}
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
                      {link.label ?? getResourceLabel(link.type)}
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
