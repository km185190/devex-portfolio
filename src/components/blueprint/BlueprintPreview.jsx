import React from "react";

const BlueprintPreview = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-500/5 dark:to-blue-500/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Proven Process
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            The Blueprint for Success
          </p>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            A structured approach to DevOps transformation, refined through
            dozens of successful implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              phase: "Discovery",
              time: "Weeks 1-2",
              description: "Deep analysis and roadmap creation",
            },
            {
              phase: "Foundation",
              time: "Weeks 3-6",
              description: "Core infrastructure and automation",
            },
            {
              phase: "Transform",
              time: "Weeks 7-14",
              description: "Process optimization and team enablement",
            },
            {
              phase: "Scale",
              time: "Weeks 15-16",
              description: "Refinement and knowledge transfer",
            },
          ].map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step.phase}
                </h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                  {step.time}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/success-blueprint"
            className="inline-flex items-center text-base font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
          >
            View Full Blueprint
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlueprintPreview;
