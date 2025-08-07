import React from "react";
import { useParams } from "react-router-dom";

// Dummy data for demonstration
const projects = [
  {
    id: "1",
    title: "Project One",
    description: "Detailed info about Project One.",
  },
  {
    id: "2",
    title: "Project Two",
    description: "Detailed info about Project Two.",
  },
  {
    id: "3",
    title: "Project Three",
    description: "Detailed info about Project Three.",
  },
];

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg">{project.description}</p>
    </div>
  );
}
