import skillsData from '@/data/skills.json';
import { SkillCategory } from '@/types/skills';

export default function SkillsSection() {
  const categories = skillsData as SkillCategory[];

  return (
    <section className="max-w-4xl mx-auto py-12 px-4" id="skills">
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
        Skills & Technologies
      </h2>

      {/* Big Card Container (Colorless Border) */}
      <div className="bg-surface border-transparent rounded-2xl p-6 md:p-8 shadow-xl">
        {categories.map((group, index) => (
          <div key={group.id}>
            {/* Category Block */}
            <div className="py-6 first:pt-0 last:pb-0">
              <h3 className="text-lg font-medium uppercase tracking-wider text-muted-foreground mb-4">
                {group.category}
              </h3>

              {/* Non-Clickable Skill Pills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-2.5 rounded-lg text-base font-medium 
                               bg-emerald-600 dark:bg-emerald-700 
                               text-white shadow-sm inline-block select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Thicker White Horizontal Divider */}
            {index < categories.length - 1 && (
              <hr className="border-t-2 border-white/30 my-2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}