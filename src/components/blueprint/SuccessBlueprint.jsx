import React from "react";

const PhaseCard = ({ phase, timing, activities, milestone, signals }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 relative z-10">
    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 mb-4">
      {timing}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
      {phase}
    </h3>

    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
          Key Activities
        </h4>
        <ul className="space-y-2">
          {activities.map((activity, i) => (
            <li key={i} className="flex items-start">
              <svg
                className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-400">
                {activity}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
          Phase Milestone
        </h4>
        <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
          <p className="text-indigo-700 dark:text-indigo-300">{milestone}</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
          Success Signals
        </h4>
        <ul className="space-y-2">
          {signals.map((signal, i) => (
            <li key={i} className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-400">{signal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const SuccessBlueprint = () => {
  const phases = [
    {
      phase: "Discovery & Assessment",
      timing: "Weeks 1-2",
      activities: [
        "Deep-dive technical infrastructure review",
        "Team workflow shadowing",
        "Performance metrics baseline",
        "Security & compliance audit",
      ],
      milestone: "Comprehensive Assessment Report & Roadmap",
      signals: [
        "Clear picture of current bottlenecks",
        "Prioritized improvement opportunities",
        "Team alignment on goals",
        "Defined success metrics",
      ],
    },
    {
      phase: "Foundation Building",
      timing: "Weeks 3-6",
      activities: [
        "Environment standardization",
        "Core automation implementation",
        "Security integration",
        "Monitoring foundation",
      ],
      milestone: "Automated Core Infrastructure",
      signals: [
        "Consistent development environments",
        "Basic automation in place",
        "Security controls automated",
        "Key metrics being tracked",
      ],
    },
    {
      phase: "Transformation & Automation",
      timing: "Weeks 7-14",
      activities: [
        "CI/CD pipeline optimization",
        "Quality gates implementation",
        "Deployment automation",
        "Team upskilling",
      ],
      milestone: "Streamlined Development Workflow",
      signals: [
        "Deployment time reduced by 50%+",
        "Zero manual security checks",
        "Automated testing in place",
        "Team confidently using new tools",
      ],
    },
    {
      phase: "Optimization & Scale",
      timing: "Weeks 15-16",
      activities: [
        "Process refinement",
        "Advanced automation",
        "Knowledge transfer",
        "Future roadmap",
      ],
      milestone: "Self-Sufficient Team",
      signals: [
        "80%+ reduction in deployment time",
        "Zero critical production issues",
        "Team operating independently",
        "Clear path forward",
      ],
    },
  ];

  return (
    <div className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-500/5 dark:to-blue-500/5" />
        <div className="absolute inset-y-0 right-0 w-1/2">
          <div className="absolute inset-0 bg-gradient-to-l from-indigo-50 to-transparent dark:from-indigo-500/10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Our Proven Process
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            The Blueprint for DevOps Excellence
          </p>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            A structured approach refined through dozens of successful
            transformations, designed to deliver predictable results while
            minimizing risk.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {phases.map((phase, index) => (
            <PhaseCard key={index} {...phase} />
          ))}
        </div>

        {/* Outcomes & Social Proof */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Typical Transformation Outcomes
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  85%
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Deployment Time Reduction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  60%
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Team Velocity Increase
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  40%+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Infrastructure Cost Savings
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  85%+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Team Satisfaction Improvement
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <blockquote className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">
                "Following this blueprint, we went from 90-minute deployments
                with frequent failures to 5-minute deployments with 99.9%
                success rate."
              </p>
              <footer className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                    SC
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900 dark:text-white">
                    Sarah Chen
                  </div>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400">
                    VP Engineering, FinTech Solutions
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
          >
            Schedule Blueprint Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessBlueprint;
