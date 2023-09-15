// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import routes from "../utils/routes";
import { Menu } from "lucide-react";
// import { Moon, Sun } from "lucide-react";

export default function Header() {
  // Navbar
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] bg-white"
              >
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      to={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link to="/" className="ml-4 lg:ml-0">
              <div className="text-2xl font-bold transition-all duration-300 hover:scale-105">
                &#123; &#125; Stefan.
              </div>
            </Link>
          </div>
          {/* code below needs to include hidden despite underline in editor in order to work */}
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button
                asChild
                variant="ghost"
                key={i}
                className="hover:bg-black hover:text-white"
              >
                <Link
                  to={route.href}
                  className="transition-colors text-base font-medium"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          {/* TODO: Implement Dark/Light mode switching */}
          {/* Possible source for inspiration: https://github.com/vercel/next.js/discussions/50786 */}
          {/* <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
          </div> */}
        </div>
      </Container>
    </header>
  );
}
