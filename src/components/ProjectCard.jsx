/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Link as LinkIcon, Youtube } from "lucide-react";

export default function ProjectCard({ data: project }) {
  return (
    <Card className="rounded-lg border-2">
      <CardContent className="pt-4 pb-3">
        <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
          <img
            src={project?.image}
            alt={project?.title}
            className="aspect-square object-cover rounded-lg border-2 border-black dark:border-white"
          />
        </div>
        <div>
          {project?.tech?.map((tag, i) => (
            <Badge key={i} className="mr-2 my-3">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex-col items-start">
        <div>
          <h2 className="font-semibold text-lg">{project?.title}</h2>
          <p className="text-lg">{project?.description}</p>
        </div>
        <div className="flex ml-auto">
          <Link to={project?.github}>
            <Github className="transition-all duration-300 hover:scale-110" />
          </Link>
          {project.url ? (
            <Link to={project?.url}>
              <LinkIcon className="transition-all duration-300 hover:scale-110" />
            </Link>
          ) : null}
          {project.demo ? (
            <Link to={project?.demo}>
              <Youtube className="transition-all duration-300 hover:scale-110" />
            </Link>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}
