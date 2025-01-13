import milestones from "../content/fontend";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white flex flex-col items-center min-h-screen p-6">
      <div className="max-w-[1366px] w-full px-4">

        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-rm-pale-silver mb-4">
            Frontend Engineering Mastery Roadmap
          </h1>
          <hr className="my-4 h-0.5 bg-rm-pale-silver/25 w-full" />
        </header>

        {/* Introduction Section */}
        <section className="prose prose-lg max-w-none text-rm-pale-silver mb-12">
          <h3 className="text-2xl font-semibold text-rm-pale-silver mb-4">Introduction</h3>
          <p>
            This roadmap is designed to guide you through mastering every aspect of frontend engineering. Follow the milestones, check off tasks as you progress, and use the suggested guides and resources for deeper learning.
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
          <h3 className="text-2xl font-semibold text-rm-pale-silver mb-4">Conclusion</h3>
          <p>
            Frontend engineering mastery is a journey. Celebrate small wins, stay consistent, and keep building projects to reinforce your knowledge!
          </p>
        </section>

      </div>
    </main>
  );
}
