"use client";

import { useState } from "react";
import experienceData from "@/data/experience.json";
import type { ExperienceItem } from "@/types/experience";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Experiences() {
  const experiences = experienceData as ExperienceItem[];

  return (
    <section
      id="experiences"
      className="flex flex-col items-center justify-center py-20 bg-surface"
    >
      {/* Title */}
      <h2 className="text-4xl mb-12 text-center font-bold text-gray-900 dark:text-white">
        Experience
      </h2>

      {/* Container with constrained maximum width */}
      <div className="max-w-3xl w-full px-4 space-y-10">
        {experiences.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show first 3 achievements by default, or all if expanded
  const INITIAL_SHOW_COUNT = 3;
  const visibleAchievements = isExpanded
    ? item.achievements
    : item.achievements.slice(0, INITIAL_SHOW_COUNT);

  const hasMore = item.achievements.length > INITIAL_SHOW_COUNT;

  return (
    <div className="flex flex-col md:flex-row items-start gap-4">
      {/* Logo */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src={item.company.logo}
          alt={item.company.name}
          fill
          className="rounded-md object-cover"
        />
      </div>

      {/* Content Body */}
      <div className="flex-1">
        {/* Role */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {item.role}
        </h3>

        {/* Company Name */}
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {item.company.name}
        </p>

        {/* Period */}
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {item.period}
        </p>

        {/* Location */}
        <p className="text-xs text-emerald-800 dark:text-emerald-400 font-bold mb-3">
          {item.location}
        </p>

        {/* Achievements List */}
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-900 dark:text-gray-300">
          {visibleAchievements.map((achievement, index) => (
            <li key={index} className="leading-relaxed">
              {achievement}
            </li>
          ))}
        </ul>

        {/* View More / View Less Toggle Button */}
        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors focus:outline-none"
          >
            <span>{isExpanded ? "View Less" : "View More"}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}