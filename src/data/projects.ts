export interface Project {
  slug: string;
  name: string;
  image: string;
  category: string;
  tags: string[];
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  improvements: string;
}

// Replace image URLs with your real project screenshots later
// (e.g. /images/projects/project-1.png placed in the public folder).
export const PROJECTS: Project[] = [
  {
    slug: "legalease",
    name: "LegalEase – Online Lawyer Hiring Platform",
    image: "https://i.ibb.co.com/bRmLQBTj/Screenshot-2026-07-24-170601.png",
    category: "Full Stack",
    tags: ["Next.js", "Stripe", "BetterAuth", "Express.js"],
    description:
      "A full-stack legal marketplace that connects clients with verified lawyers through a secure, role-based platform. Users can browse and hire lawyers, lawyers manage incoming requests and their profile, and admins oversee users, transactions and platform analytics — all protected by JWT-based authentication with Google OAuth login and Stripe-powered payments.",
    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "BetterAuth",
      "Stripe",
      "Tailwind CSS",
      "Framer Motion",
      "HeroUI",
    ],
    liveLink: "https://legalease-pearl-eta.vercel.app",
    githubLink: "https://github.com/WebdeveloperNahid/legalease",
    challenges:
      "The biggest challenge was managing role-based access — making sure users, lawyers, and admins each land on and only see their own dashboard. I solved this by verifying the user's role from the JWT token on every protected route, combined with Google Sign-in and token-based session handling for a secure login flow.",
    improvements:
      "Planning to refine the overall theme with more refined visuals, add lightweight animations for smoother transitions, and further improve user experience and performance across the dashboard and browsing pages.",
  },
  {
    slug: "tripnest",
    name: "TripNest — Travel Agency & Online Tour Booking Platform",
    image: "https://i.ibb.co.com/tM2qg3Qd/Screenshot-2026-07-15-134237.png",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Express.js"],
    description:
      "A full-stack travel tour discovery and booking platform where admins (travel agencies) can create and manage tour packages, while users can browse, search, filter, and book tours across categories like Beach, Adventure, Hill & Mountain, and Historical destinations — complete with role-based access, a full booking flow, and a responsive, feature-rich interface.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HeroUI",
    ],
    liveLink: "https://tripnest-seven.vercel.app",
    githubLink: "https://github.com/WebdeveloperNahid/tripnest",
    challenges:
      "This was my first project built with TypeScript, so exploring and learning it within a limited timeframe while still delivering the project on schedule was the biggest challenge — but I was able to complete it successfully.",
    improvements:
      "Planning to add a Stripe payment system for tour bookings, along with further improvements to the existing features.",
  },
  {
    slug: "learnpath",
    name: "LearnPath — AI-Powered Course Discovery & Learning Platform",
    image: "https://i.ibb.co.com/SXmtr9sY/Screenshot-2026-07-24-175449.png",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Gemini AI"],
    description:
      "A full-stack agentic AI course marketplace, similar in concept to Udemy or Coursera, where instructors publish and manage their own courses while students discover the right courses through AI-powered recommendations and an intelligent chat assistant. Built with a two-role system (Student and Instructor), Google social login, and a fully responsive, feature-rich interface.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "BetterAuth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini API",
    ],
    liveLink: "https://learn-path-sandy.vercel.app",
    githubLink: "https://github.com/WebdeveloperNahid/learn_path",
    challenges:
      "Building the AI recommendation engine, integrating the Gemini API, and maintaining conversation context in the AI chat assistant were the biggest challenges — each took focused effort to get right, but I was able to work through them and get everything functioning smoothly.",
    improvements:
      "Planning to further polish the UI/UX design, improve overall performance and speed, and enable a full payment system to make the platform completely real-world ready.",
  },
];
