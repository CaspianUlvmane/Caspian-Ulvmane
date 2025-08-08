import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "~/components/ui/breadcrumb";

export default function ProjectPage() {
  let { id } = useParams();
  id = Number(id);
  const [project, setProject] = React.useState<any>(null);

  useEffect(() => {
    fetch("/db/projects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data = data.projects;
        console.log(id);
        console.log(data);
        setProject(
          data
            .filter((p) => p.id === id)
            .map((project: any) => ({
              id: project.id,
              title: project.title,
              description: project.description || "No description provided.",
              details: project.details || "No details provided.",
              image: project.image,
              technologies: project.technologies || [
                "No technologies specified.",
              ],
              url: project.url,
              github: project.github,
              date: project.date || "No date provided.",
            }))[0]
        );
      });
  }, []);

  console.log(project);

  return (
    <>
      {project && (
        <div className="p-8 max-w-2xl lg:max-w-4xl mx-auto flex flex-col gap-4 relative z-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
              <BreadcrumbSeparator />
              <BreadcrumbItem>{project.title}</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Card className="border-accent">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {project.title}
              </CardTitle>
              <CardDescription className="text-center">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {project.details.map((detail: string, index: number) => (
                <p key={index} className="mb-2">
                  {detail}
                </p>
              ))}
              <img
                className="mx-auto border-2 border-accent-foreground max-h-[404px] rounded-4xl shadow-2xl"
                src={project.image}
                alt={project.title}
              />
              <p className="mb-2 font-bold text-center">Technologies</p>
              <ul className="flex mb-4 gap-2 flex-wrap items-start justify-start">
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
              <p className="mb-4">Date: {project.date}</p>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on Github
                </a>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
