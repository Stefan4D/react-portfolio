// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import { AtSign, Linkedin, Github, FileText } from "lucide-react";
import Container from "../components/ui/Container";

export default function Contact() {
  return (
    <Container width="w-full">
      <Container className="text-center">
        <h1 className="text-6xl text-center my-5">Contact</h1>
        <div>Form goes here</div>
        <div className="flex text-center justify-center mt-5">
          <Link to="mailto:fake@email.com">
            <AtSign className="mr-3" />
          </Link>
          <Link to="https://www.linkedin.com/">
            <Linkedin className="mr-3" />
          </Link>
          <Link to="https://github.com/Stefan4D">
            <Github className="mr-3" />
          </Link>
          <Link to="/files/CV-template.pdf">
            <FileText />
          </Link>
        </div>
      </Container>
    </Container>
  );
}
