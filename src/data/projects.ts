export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Supply Chain Dashboard",
    description: "A React-based data visualization dashboard for risk analysis, integrating multiple data sources with interactive charts and geospatial mapping.",
    tags: ["React.js", "D3.js", "Data Visualization", "GIS", "TypeScript"]
  },
  {
    id: "project-2",
    title: "Architectural Plans Repository",
    description: "A collaborative platform for architects and construction teams to manage, version, and share architectural drawings and documentation.",
    tags: ["React.js", "TypeScript", "Node.js", "Document Management"]
  },
  {
    id: "project-3",
    title: "Shoe Inventory Tracker",
    description: "A React-based hybrid mobile app for in-store shoe availability tracking with Material-UI and optimized asynchronous data handling.",
    tags: ["React.js", "Material-UI", "Node.js", "Mobile Development"]
  },
  {
    id: "project-4",
    title: "Smart Traffic Management",
    description: "A React SPA for municipal traffic control, enabling real-time monitoring and management of city traffic systems.",
    tags: ["React.js", "Real-time Data", "Traffic Systems", "TypeScript"]
  }
];