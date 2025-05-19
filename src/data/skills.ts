export interface SkillCategory {
  title: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      "React.js & TypeScript",
      "JavaScript (ES6+)",
      "Recoil & Redux",
      "Next.js",
      "Material-UI & Tailwind",
      "D3.js & Data Visualization",
      "Responsive Design"
    ]
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "REST APIs",
      "ASP.NET MVC",
      ".NET Core",
      "C#",
      "Java"
    ]
  },
  {
    title: "Infrastructure & Tools",
    items: [
      "AWS, Azure & GCP",
      "Docker",
      "Cloudflare",
      "MongoDB",
      "SQL Server",
      "CosmosDB",
      "Git & Agile"
    ]
  }
];