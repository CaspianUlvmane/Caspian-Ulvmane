import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/CaspianUlvmane/repos")
      .then((res) => res.json())
      .then((data) => {
        setProjects(
          data.map((repo: any) => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || "No description provided.",
            url: repo.html_url,
          }))
        );
      });
  }, []);
  console.log(projects);
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid gap-4">
        {projects
          .filter(
            (project) =>
              project.description &&
              project.description !== "No description provided."
          )
          .map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <h2>{project.title}</h2>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  onClick={() => navigate(`/projectPage/${project.id}`)}
                >
                  <p>{project.description}</p>
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
