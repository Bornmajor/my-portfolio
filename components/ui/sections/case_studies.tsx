import caseStudiesData from '@/data/case-studies.json';
import { CaseStudyItem } from '@/types/case-study';
import { Star } from 'lucide-react';

export default function CaseStudiesSection() {
  const caseStudies = caseStudiesData as CaseStudyItem[];

  return (
    /* Top-level background set to bg-surface (#dddddd) without cards */
    <div className="bg-surface py-16 px-4 md:px-8 min-h-screen">
      <section className="max-w-7xl mx-auto space-y-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          Case Studies
        </h2>

        {caseStudies.map((item) => (
          /* Main Horizontal Flex Row: Star on the left, ALL text contents on the right */
          <div key={item.id} className="flex items-start gap-4 md:gap-6">
            
            {/* 1. Left Side: Star Icon */}
            <Star className="w-7 h-7 text-primary fill-primary flex-shrink-0 mt-1" />

            {/* 2. Right Side: Linear Text Stack */}
            <div className="space-y-8 max-w-3xl flex-1">
              {/* Project Title */}
              <h3 className="text-3xl font-semibold text-gray-900">
                {item.projectName}
              </h3>

              {/* Challenge */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800">
                  The Challenge
                </h4>
                <p className="text-base text-gray-900 leading-relaxed font-normal">
                  {item.challenge}
                </p>
              </div>

              {/* How Solved */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800">
                  How I Solved It
                </h4>
                <p className="text-base text-gray-900 leading-relaxed font-normal">
                  {item.solution}
                </p>
              </div>

              {/* Tech / Platform */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800">
                  Platform & Tech
                </h4>
                <div className="text-base text-emerald-800 font-bold">
                  {item.techOrPlatform}
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}