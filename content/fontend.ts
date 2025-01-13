const milestones = [
    {
      title: "HTML & CSS Fundamentals",
      tasks: [
        {
          name: "Learn the structure of an HTML document",
          guide: "MDN HTML Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "Understand semantic HTML and its importance",
          guide: "Semantic HTML",
          link: "https://www.w3schools.com/html/html5_semantic_elements.asp",
        },
        {
          name: "Master basic and advanced CSS properties",
          guide: "CSS Basics",
          link: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
        },
        {
          name: "Practice responsive design using Media Queries",
          guide: "Responsive Design",
          link: "https://web.dev/responsive-web-design-basics/",
        },
        {
          name: "Learn Flexbox and Grid Layout",
          guide: "Flexbox Guide",
          link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        },
        {
          guide: "Grid Guide",
          link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
        },
      ],
    },
    {
      title: "JavaScript Essentials",
      tasks: [
        {
          name: "Understand JavaScript fundamentals: variables, types, and operators",
          guide: "JavaScript Basics",
          link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
        },
        {
          name: "Master control structures and functions",
          guide: "JS Functions",
          link: "https://www.w3schools.com/js/js_functions.asp",
        },
        {
          name: "Explore the DOM and event handling",
          guide: "DOM Manipulation",
          link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        },
        {
          name: "Learn ES6+ features: let, const, arrow functions, template literals, and destructuring",
          guide: "ES6 Guide",
          link: "https://www.freecodecamp.org/news/es6-guide/",
        },
        {
          name: "Practice with basic projects (e.g., a calculator or to-do list)",
        },
      ],
    },
    {
      title: "Version Control & Collaboration",
      tasks: [
        {
          name: "Learn Git basics: add, commit, push, pull",
          guide: "Git Basics",
          link: "https://git-scm.com/doc",
        },
        {
          name: "Understand branching and merging strategies",
          guide: "Git Branching",
          link: "https://www.atlassian.com/git/tutorials/using-branches",
        },
        {
          name: "Explore GitHub workflows",
          guide: "GitHub Guide",
          link: "https://guides.github.com/",
        },
      ],
    },
    {
      title: "Modern CSS",
      tasks: [
        {
          name: "Learn pre-processors like SASS/SCSS",
          guide: "SASS Guide",
          link: "https://sass-lang.com/guide",
        },
        {
          name: "Explore utility-first CSS with TailwindCSS",
          guide: "TailwindCSS Docs",
          link: "https://tailwindcss.com/docs",
        },
        {
          name: "Master animations and transitions",
          guide: "CSS Animations",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations",
        },
      ],
    },
    {
      title: "Frontend Frameworks",
      tasks: [
        {
          name: "Learn the basics of React.js",
          guide: "React Docs",
          link: "https://react.dev/",
        },
        {
          name: "Understand component-based architecture",
        },
        {
          name: "Explore state management with Redux or Context API",
          guide: "Redux",
          link: "https://redux.js.org/",
        },
        {
          guide: "Context API",
          link: "https://reactjs.org/docs/context.html",
        },
        {
          name: "Try other frameworks like Vue.js or Svelte",
          guide: "Vue.js Guide",
          link: "https://vuejs.org/",
        },
        {
          guide: "Svelte Guide",
          link: "https://svelte.dev/",
        },
      ],
    },
    {
      title: "Advanced JavaScript",
      tasks: [
        {
          name: "Master asynchronous JavaScript: Promises, async/await, and AJAX",
          guide: "Async JS",
          link: "https://javascript.info/async",
        },
        {
          name: "Understand closures, prototypes, and the event loop",
          guide: "JS Concepts",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
        },
        {
          name: "Learn TypeScript for type safety",
          guide: "TypeScript Docs",
          link: "https://www.typescriptlang.org/",
        },
      ],
    },
    {
      title: "APIs and Backend Communication",
      tasks: [
        {
          name: "Learn RESTful APIs",
          guide: "REST API Guide",
          link: "https://restfulapi.net/",
        },
        {
          name: "Explore GraphQL",
          guide: "GraphQL Docs",
          link: "https://graphql.org/learn/",
        },
        {
          name: "Use Postman for API testing",
          guide: "Postman",
          link: "https://www.postman.com/",
        },
      ],
    },
    {
      title: "Testing",
      tasks: [
        {
          name: "Understand unit, integration, and end-to-end testing",
        },
        {
          name: "Use Jest for testing JavaScript code",
          guide: "Jest Docs",
          link: "https://jestjs.io/",
        },
        {
          name: "Learn testing libraries like Cypress or Playwright",
          guide: "Cypress Docs",
          link: "https://www.cypress.io/",
        },
      ],
    },
    {
      title: "Performance Optimization",
      tasks: [
        {
          name: "Learn about web performance metrics (LCP, FID, CLS)",
          guide: "Core Web Vitals",
          link: "https://web.dev/vitals/",
        },
        {
          name: "Optimize images and assets",
          guide: "Image Optimization",
          link: "https://web.dev/fast/",
        },
        {
          name: "Use lazy loading and code splitting",
          guide: "Lazy Loading",
          link: "https://web.dev/lazy-loading/",
        },
      ],
    },
    {
      title: "Build Tools and Deployment",
      tasks: [
        {
          name: "Learn build tools like Webpack, Vite, or Parcel",
          guide: "Webpack Guide",
          link: "https://webpack.js.org/",
        },
        {
          name: "Explore CI/CD pipelines",
          guide: "CI/CD Basics",
          link: "https://www.atlassian.com/continuous-delivery/ci-vs-cd",
        },
        {
          name: "Deploy applications on platforms like Vercel or Netlify",
          guide: "Vercel Docs",
          link: "https://vercel.com/docs",
        },
        {
          guide: "Netlify Docs",
          link: "https://www.netlify.com/",
        },
      ],
    },
    {
      title: "Web Security",
      tasks: [
        {
          name: "Learn about common security vulnerabilities (XSS, CSRF, etc.)",
          guide: "OWASP Top 10",
          link: "https://owasp.org/www-project-top-ten/",
        },
        {
          name: "Implement secure authentication and authorization",
          guide: "JWT Authentication",
          link: "https://jwt.io/introduction",
        },
        {
          name: "Use HTTPS and secure headers",
          guide: "MDN Security Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/Security",
        },
      ],
    },
    {
      title: "SEO and Digital Marketing",
      tasks: [
        {
          name: "Learn SEO basics: on-page, off-page, and technical SEO",
          guide: "SEO Guide",
          link: "https://moz.com/beginners-guide-to-seo",
        },
        {
          name: "Optimize metadata and structured data",
          guide: "Schema Markup",
          link: "https://schema.org/",
        },
        {
          name: "Explore analytics tools like Google Analytics",
          guide: "Google Analytics Guide",
          link: "https://analytics.google.com/analytics/academy/",
        },
      ],
    },
    {
      title: "Project Management & Collaboration",
      tasks: [
        {
          name: "Learn Agile methodologies (Scrum, Kanban)",
          guide: "Agile Guide",
          link: "https://www.atlassian.com/agile",
        },
        {
          name: "Use project management tools like Jira, Trello, or Asana",
          guide: "Trello Guide",
          link: "https://trello.com/guide",
        },
        {
          guide: "Jira Guide",
          link: "https://www.atlassian.com/software/jira/guides",
        },
        {
          name: "Understand stakeholder communication and documentation",
          guide: "Stakeholder Management",
          link: "https://www.projectmanager.com/blog/stakeholder-management",
        },
      ],
    },
    {
      title: "Soft Skills and Career Growth",
      tasks: [
        {
          name: "Improve communication and teamwork",
        },
        {
          name: "Contribute to open-source projects",
          guide: "Open Source Guide",
          link: "https://opensource.guide/",
        },
        {
          name: "Build a portfolio showcasing your projects",
          guide: "Portfolio Tips",
          link: "https://www.freecodecamp.org/news/portfolio-tips/",
        },
      ],
    },
  ];
  
  export default milestones;
  