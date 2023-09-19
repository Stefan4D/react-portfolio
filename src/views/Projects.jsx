// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/ui/Container";

import projects from "../api/projectData.json";

export default function Projects() {
  return (
    <Container>
      <h1 className="text-6xl text-center my-5">My Projects</h1>
      <div className="space-y-4 mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Container>
  );
}
