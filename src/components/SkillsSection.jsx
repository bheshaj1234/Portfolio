import { useState } from "react";
import cn from "@/lib/utils";

const skills = [
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    color: "#E34F26",
    description: "Semantic structures, styling, responsive layouts, Grid, Flexbox, and CSS variables.",
    icon: <i className="devicon-html5-plain colored text-4xl"></i>,
  },
  {
    name: "JavaScript",
    category: "frontend",
    color: "#F7DF1E",
    description: "ES6+ syntax, asynchronous operations, event-driven programming, and DOM manipulation.",
    icon: <i className="devicon-javascript-plain colored text-4xl"></i>,
  },
  {
    name: "React",
    category: "frontend",
    color: "#61DAFB",
    description: "Component-based architecture, hooks, state management, and virtual DOM mapping.",
    icon: <i className="devicon-react-original colored text-4xl"></i>,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    color: "#38BDF8",
    description: "Utility-first workflows, custom configuration, custom styles, and responsive layouts.",
    icon: <i className="devicon-tailwindcss-original colored text-4xl"></i>,
  },
  {
    name: "Next.js",
    category: "frontend",
    color: "#000000",
    description: "React framework supporting SSR, Static Generation (SSG), routing, and SEO optimization.",
    icon: <i className="devicon-nextjs-original text-4xl dark:text-white"></i>,
  },
  {
    name: "Node.js",
    category: "backend",
    color: "#339933",
    description: "JavaScript runtime on Chrome V8 engine, scaling scalable server applications.",
    icon: <i className="devicon-nodejs-plain colored text-4xl"></i>,
  },
  {
    name: "Express.js",
    category: "backend",
    color: "#828282",
    description: "Lightweight and flexible web framework for APIs, routes, and middleware.",
    icon: <i className="devicon-express-original text-4xl dark:text-white"></i>,
  },
  {
    name: "MongoDB",
    category: "backend",
    color: "#47A248",
    description: "NoSQL document database, aggregation, schema validation, and indexing.",
    icon: <i className="devicon-mongodb-plain colored text-4xl"></i>,
  },
  {
    name: "Git & GitHub",
    category: "tools",
    color: "#F05032",
    description: "Distributed version control, remote code hosting, pull requests, and branching.",
    icon: <i className="devicon-git-plain colored text-4xl"></i>,
  },
  {
    name: "Figma",
    category: "tools",
    color: "#F24E1E",
    description: "Vector graphics design, UI/UX layouts, wireframes, and design handoff.",
    icon: <i className="devicon-figma-plain colored text-4xl"></i>,
  },
  {
    name: "VS Code",
    category: "tools",
    color: "#007ACC",
    description: "Code editor optimized for source control, syntax highlighting, and debugging.",
    icon: <i className="devicon-vscode-plain colored text-4xl"></i>,
  },
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