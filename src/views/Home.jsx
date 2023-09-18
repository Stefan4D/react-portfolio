// eslint-disable-next-line no-unused-vars
import React from "react";

import Container from "../components/ui/Container";

export default function Home() {
  return (
    <>
      <Container width="w-full" className="bg-sky-600">
        <Container className="py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="text-center md:text-start md:ml-9">
            <h1 className="text-6xl text-sky-200 font-bold">
              Hi. I&apos;m Stefan.
            </h1>
            <p className="text-3xl font-light text-sky-900">
              I&apos;m a Software Engineer
            </p>
            <p className="text-xl">Welcome to my portfolio site.</p>
          </div>
          <div>
            <img
              src="/images/stefan-avatar.png"
              alt="Avatar image of Stefan"
              className="rounded-full mx-auto"
            />
          </div>
        </Container>
      </Container>
    </>
  );
}
