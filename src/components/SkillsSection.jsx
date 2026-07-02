import { useState } from "react";
import cn from "@/lib/utils";

const skills = [
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    color: "#E34F26",
    description: "Semantic structures, styling, responsive layouts, Grid, Flexbox, and CSS variables.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 2h21l-1.9 17-8.6 2.3-8.6-2.3L1.5 2z" fill="#E34F26" />
        <path d="M12 20.2V3.7h7.6l-1.4 13L12 18.1" fill="#EF652A" />
        <path d="M7.7 8.3h8.6l-.2 1.8H9.7l.2 1.8h5.8l-.5 4.8-3.2.9-3.2-.9-.2-2h1.8l.1.9 1.5.4 1.5-.4.2-1.7H7.4L7.7 8.3z" fill="white" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    category: "frontend",
    color: "#F7DF1E",
    description: "ES6+ syntax, asynchronous operations, event-driven programming, and DOM manipulation.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M17.65 19c-.38.83-.98 1.48-2.07 1.48-1.44 0-2.12-1.01-2.12-2.31h1.79c0 .7.25 1 .74 1 .42 0 .66-.23.66-.88V10.3h1.99v8.03c.01.24.01.44.01.67zm-5.06-2.58c-.46 1.42-1.63 2.06-3.23 2.06-1.92 0-2.99-1.22-2.99-3s1.3-3.21 3.51-3.21c1.37 0 2.22.5 2.65 1.4l-1.57.94c-.26-.54-.62-.83-1.12-.83-.82 0-1.41.67-1.41 1.7 0 1 .53 1.62 1.34 1.62.61 0 .97-.33 1.22-.92l1.65.24z" fill="#000000" />
      </svg>
    )
  },
  {
    name: "React",
    category: "frontend",
    color: "#61DAFB",
    description: "Component-based architecture, hooks, state management, and virtual DOM mapping.",
    icon: (
      <svg className="h-8 w-8 animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.6" fill="#61DAFB" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    color: "#38BDF8",
    description: "Utility-first workflows, custom configuration, custom styles, and responsive layouts.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.09c-2.97 0-4.46 1.49-4.46 4.46 0 2.98 1.49 4.46 4.46 4.46s4.46-1.48 4.46-4.46c0-2.97-1.49-4.46-4.46-4.46zm-5.9 5.92C3.12 12.01 1.63 13.5 1.63 16.48c0 2.97 1.49 4.46 4.46 4.46 2.98 0 4.47-1.49 4.47-4.46 0-2.98-1.49-4.47-4.46-4.47zM18.28 3.06c-2.97 0-4.46 1.49-4.46 4.46 0 2.97 1.49 4.46 4.46 4.46 2.98 0 4.47-1.49 4.47-4.46 0-2.97-1.49-4.46-4.46-4.46z" fill="#38BDF8" />
      </svg>
    )
  },
  {
    name: "Next.js",
    category: "frontend",
    color: "#000000",
    description: "React framework supporting SSR, Static Generation (SSG), routing, and SEO optimization.",
    icon: (
      <svg className="h-8 w-8 dark:bg-white dark:rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="black" stroke="white" strokeWidth="0.8" />
        <path d="M16 17.5L9.2 8.5H8V15.5H9.2V10L14.8 17.5H16Z" fill="white" />
        <path d="M14.8 8.5H16V15.5H14.8V8.5Z" fill="url(#nextjs-grad)" />
        <defs>
          <linearGradient id="nextjs-grad" x1="15.4" y1="8.5" x2="15.4" y2="15.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="#808080" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: "Node.js",
    category: "backend",
    color: "#339933",
    description: "JavaScript runtime on Chrome V8 engine, scaling scalable server applications.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm7.3 14.2l-7.3 4.1-7.3-4.1V7.8l7.3-4.1 7.3 4.1v8.4z" fill="#339933" />
        <path d="M12 5.5l-5.2 3v6l5.2 3 5.2-3v-6l-5.2-3z" fill="#339933" opacity="0.2" />
        <path d="M12 9.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z" fill="#339933" />
      </svg>
    )
  },
  {
    name: "Express.js",
    category: "backend",
    color: "#828282",
    description: "Lightweight and flexible web framework for mapping APIs, routes, and middleware.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#333333" />
        <text x="3" y="15" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">ex.</text>
      </svg>
    )
  },
  {
    name: "MongoDB",
    category: "backend",
    color: "#47A248",
    description: "NoSQL document database, aggregation, schema validation, and indexing.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5c-.3 0-.6.1-.8.2-1.5 1-4.7 4.2-4.7 9.8 0 4.1 1.7 6.4 4.7 11 3-4.6 4.7-6.9 4.7-11 0-5.6-3.2-8.8-4.7-9.8-.2-.1-.5-.2-.8-.2zm0 1.9c.7.9 3.2 3.6 3.2 7.9 0 3.2-1.2 5.2-3.2 8.7-2-3.5-3.2-5.5-3.2-8.7 0-4.3 2.5-7 3.2-7.9z" fill="#47A248" />
        <path d="M12 11.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#47A248" />
      </svg>
    )
  },
  {
    name: "Git & GitHub",
    category: "tools",
    color: "#F05032",
    description: "Distributed version control, remote code hosting, pull requests, and branching.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 11.3L12.7 1.5c-.6-.6-1.5-.6-2.1 0L1.5 10.6c-.6.6-.6 1.5 0 2.1l9.8 9.8c.3.3.7.4 1 .4.4 0 .7-.1 1-.4l9.2-9.2c.6-.5.6-1.5 0-2zm-12 7.2c-.3 0-.6-.1-.8-.3-.4-.4-.4-1 0-1.4.3-.3.8-.4 1.2-.2v-4.5c-.4-.2-.7-.6-.8-1-.2-.4-.2-.9.1-1.3-.3-.3-.8-.4-1.2-.2v1.5c.3.2.5.5.5.9 0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1v-1.5c-.4-.2-.7-.6-.8-1-.2-.4-.2-.9.1-1.3.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.3.3-.8.4-1.2.2v4.5c.4.2.7.6.8 1 .2.4.2.9-.1 1.3.3.3.8.4 1.2.2v1.5c-.4.2-.7.6-.8 1-.2.4-.2.9.1 1.3.4.4 1 .4 1.4 0 .3-.4.3-1 0-1.4l-.1-.1z" fill="#F05032" />
      </svg>
    )
  },
  {
    name: "Figma",
    category: "tools",
    color: "#F24E1E",
    description: "Vector graphics design, UI/UX layouts, wireframes, and design handoff.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 18c1.93 0 3.5-1.57 3.5-3.5V11H6.5c-1.93 0-3.5 1.57-3.5 3.5S4.57 18 6.5 18z" fill="#0ACF83" />
        <path d="M3 6.5C3 8.43 4.57 10 6.5 10H10V3H6.5C4.57 3 3 4.57 3 6.5z" fill="#F24E1E" />
        <path d="M10 10c1.93 0 3.5-1.57 3.5-3.5S11.93 3 10 3v7z" fill="#FF7262" />
        <path d="M10 11H13.5c1.93 0 3.5 1.57 3.5 3.5S15.43 18 13.5 18 10 16.43 10 14.5V11z" fill="#1ABCFE" />
        <path d="M10 14.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5S10 16.43 10 14.5z" fill="#A259FF" />
      </svg>
    )
  },
  {
    name: "VS Code",
    category: "tools",
    color: "#007ACC",
    description: "Code editor optimized for source control, syntax highlighting, and debugging.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 1.8l-8.4 6-4.2-3.2L2 7.1V17l4.2 2.5 4.2-3.2 8.4 6 3.2-1.6V3.4l-3.2-1.6zm-12.6 13l-2.6-2 2.6-2v4zM18 17.6l-5.6-4 5.6-4v8z" fill="#007ACC" />
      </svg>
    )
  }
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is my development stack. I focus on creating responsive, efficient, and highly functional applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground font-medium"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const isHovered = hoveredIndex === key;
            return (
              <div
                key={key}
                onMouseEnter={() => setHoveredIndex(key)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-card p-6 rounded-xl border border-border/50 transition-all duration-300 flex flex-col gap-4 text-left relative overflow-hidden"
                style={
                  isHovered
                    ? {
                        transform: "translateY(-4px)",
                        borderColor: skill.color,
                        boxShadow: `0 10px 25px -5px ${skill.color}25, 0 8px 10px -6px ${skill.color}25`,
                      }
                    : {}
                }
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-secondary/40">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground tracking-tight">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 bg-secondary/60 px-2 py-0.5 rounded">
                      {skill.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;