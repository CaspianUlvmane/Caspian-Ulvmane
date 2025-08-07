import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { useEffect, useState } from "react";
import About from "./homeComponents/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caspian Ulvmåne" },
    {
      name: "description",
      content:
        "Welcome to the portfolio for Caspian Ulvmåne. Full Stack Web Developer with a degree from Malmö University.",
    },
    {
      keywords:
        "Caspian Ulvmåne, Full Stack Developer, Portfolio, Web Development, Malmö University, JavaScript, React, Node.js, Python, GitHub, Projects, PHP, MySQL, MongoDB, HTML, CSS, postgreSQL, firebase, GCP",
    },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("/db/projects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data = data.projects;
        setProjects(
          data.map((project: any) => ({
            id: project.id,
            title: project.title,
            description: project.description || "No description provided.",
            details: project.details || "No details provided.",
            technologies: project.technologies || [
              "No technologies specified.",
            ],
            url: project.url || "This project has no URL due to permissions.",
            github:
              project.github ||
              "This project has no GitHub link due to permissions.",
            date: project.date || "No date provided.",
          }))
        );
      });
  }, []);

  return (
    <div className="relative z-10 p-12 md:grid-cols-1 md:max-w-1/2 lg:max-w-4xl mx-auto py-10 grid lg:grid-cols-2 gap-4 items-baseline">
      <About />
      <main>
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid gap-4">
          {projects.map((project) => (
            <Card key={project.id} className="border-accent ">
              <CardHeader>
                <h2 className="font-bold text-2xl">{project.title}</h2>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="">{project.description}</p>
                <ul className="flex gap-2 flex-wrap items-left">
                  {project.technologies.map((tech: string, index: number) => (
                    <>
                      <li
                        className="p-2 border border-accent rounded-2xl shadow-sm"
                        key={index}
                      >
                        {tech}
                      </li>
                    </>
                  ))}
                </ul>
                <Button
                  className="self-end hover:cursor-pointer"
                  variant="secondary"
                  onClick={() => navigate(`/projectPage/${project.id}`)}
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
