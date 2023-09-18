// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "./ui/Container";
import { useParams } from "react-router-dom";

import projects from "../utils/projectData.json";

export default function Project() {
  const { id } = useParams();
  // console.log(typeof id);

  const filtered = projects.filter((data) => data.id.toString() === id);
  // console.log(filtered);

  return (
    <div>
      <Container width="w-full">
        <Container>
          <h1 className="text-6xl text-center my-5">{filtered[0].title}</h1>
          <div className="space-y-4 mt-3">
            <div key={filtered[0].id}>
              <div className="p-5">
                <img
                  src={filtered[0].image}
                  alt={filtered[0].title}
                  className="mx-auto border-2 border-black dark:border-white"
                />
              </div>
              <div className="p-5">
                <p className="text-3xl font-light text-sky-900">
                  {filtered[0].description}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}
