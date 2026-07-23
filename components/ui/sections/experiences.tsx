import experienceData from "@/data/experience.json";
import type { ExperienceItem } from "@/types/experience";
import Image from "next/image";
import roamtechLogo from "@/public/images/companies/roamtech_solutions_logo.jpeg";

export default function Experiences() {
  const experiences = experienceData as ExperienceItem[];
  return (
    <section
      id="experiences"
      className="flex flex-col items-center justify-center py-20 my-15 bg-surface"
    >
      <h2 className="text-4xl mb-6 text-center">Experience</h2>
      <div className="flex flex-col justify-start space-y-8">
        {experiences.map((item) => (
        
          <div key={item.id} className="flex flex-row items-start gap-4">
            {/* Logo*/}
            <Image
              src={roamtechLogo}
              alt={item.company.name}
              width={50}
              height={50}
              className="flex-shrink-0 rounded-md"
            />
            {/* Body */}
            <div>
              <h3 className="text-xl font-semibold">Role at {item.role}</h3>
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <p className="text-sm text-primary mb-2">{item.location}</p>

              {/* Achievements list */}
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                {item.achievements.map((achievement, index) => (
                  <li key={index} className="leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
