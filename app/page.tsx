import milestones from "../content/fontend";

export default function Home() {
  return (
    <div>
      <head>
        {/* Title Tag */}
        <title>
          Vihanga Frontend Engineering Roadmap | Master Frontend Skills
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore the Vihanga Frontend Engineering Roadmap to master HTML, CSS, JavaScript, React, and more. Start your journey with practical tasks and guides."
        />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Vihanga Frontend Engineering Roadmap"
        />
        <meta
          property="og:description"
          content="Explore the Vihanga Frontend Engineering Roadmap to master HTML, CSS, JavaScript, React, and more. Start your journey with practical tasks and guides."
        />
        <meta property="og:image" content="link-to-image.jpg" />
        <meta property="og:url" content="https://roadmap.vihanga.site" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:title"
          content="Vihanga Frontend Engineering Roadmap"
        />
        <meta
          name="twitter:description"
          content="Explore the Vihanga Frontend Engineering Roadmap to master HTML, CSS, JavaScript, React, and more. Start your journey with practical tasks and guides."
        />
        <meta name="twitter:image" content="link-to-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema Markup (FAQ) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the Vihanga roadmap?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Vihanga roadmap is a structured guide to mastering frontend development, including HTML, CSS, JavaScript, and modern frameworks like React.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I follow the Vihanga roadmap?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can follow the Vihanga roadmap by completing each milestone step by step and practicing with the recommended resources and projects.",
                  },
                },
              ],
            }),
          }}
        ></script>
      </head>

      <main className="bg-gray-900 text-white flex flex-col items-center min-h-screen p-6">
        <div className="max-w-[1366px] w-full px-4">
          {/* Header Section */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-semibold text-rm-pale-silver mb-4">
              Vihanga Frontend Engineering Roadmap
            </h1>
            <hr className="my-4 h-0.5 bg-rm-pale-silver/25 w-full" />
          </header>

          {/* Introduction Section */}
          <section className="prose prose-lg max-w-none text-rm-pale-silver mb-12">
            <h2 className="text-2xl font-semibold text-rm-pale-silver mb-4">
              Introduction to the Vihanga Frontend Roadmap
            </h2>
            <p>
              The <strong>Vihanga Frontend Engineering Roadmap</strong> is
              designed to guide you step by step through mastering every aspect
              of frontend development. Whether you&apos;re starting fresh or
              refining your skills, this roadmap will help you grow in HTML,
              CSS, JavaScript, React, and more. Use the practical tasks and
              detailed guides at each milestone to build your expertise.
            </p>
          </section>

          {/* Milestones Section */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                {/* Milestone Title */}
                <h2 className="text-2xl font-bold text-rm-pale-silver mb-4">
                  {`Milestone ${index + 1}: ${milestone.title}`}
                </h2>

                {/* Tasks List */}
                <ul className="list-disc ml-6 space-y-2">
                  {milestone.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-lg">
                      {task.name}
                      {task.guide && (
                        <span className="text-blue-400 ml-2">
                          {" - "}
                          <a
                            href={task.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                          >
                            {task.guide}
                          </a>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Conclusion Section */}
          <section className="prose prose-lg max-w-none text-rm-pale-silver mt-12">
            <h2 className="text-2xl font-semibold text-rm-pale-silver mb-4">
              Conclusion
            </h2>
            <p>
              Mastery in frontend engineering is a journey. Celebrate small
              wins, stay consistent, and continue building projects to reinforce
              your knowledge and skills. Keep up with the Vihanga Frontend
              Engineering Roadmap to become a proficient frontend developer!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
