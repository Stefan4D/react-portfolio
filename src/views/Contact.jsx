// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AtSign, Linkedin, Github, FileText } from "lucide-react";
import Container from "../components/ui/Container";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container width="w-full">
      <Container width="max-w-2xl">
        <h1 className="text-6xl text-center my-5">Contact</h1>
        <div>
          <form action="" className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 m-1"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 m-1"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="border-2 m-1"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="hover:bg-black hover:text-white px-3 py-1 outline rounded-lg w-max"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
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
