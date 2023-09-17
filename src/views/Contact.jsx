// eslint-disable-next-line no-unused-vars
import React from "react";

import { AtSign, Linkedin, Github, FileText } from "lucide-react";
import Container from "../components/ui/Container";

export default function Contact() {
  return (
    <Container width="w-full">
      <Container className="text-center">
        <h1 className="text-6xl text-center my-5">Contact</h1>
        <div>Form goes here</div>
        <div className="flex text-center justify-center mt-5">
          <AtSign />
          <Linkedin />
          <Github />
          <FileText />
        </div>
      </Container>
    </Container>
  );
}
