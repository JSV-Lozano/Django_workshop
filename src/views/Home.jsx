import React from "react";
import { Hero_Sections } from "../components/Hero_Section";
import { Accordion } from "../components/Accordion";
import About from "../components/About";
import Exclusive from "../components/Exclusive";
import { Destination } from "../components/Destinations";
import { CeoAbout } from "../components/CeoAbout";
import { BlogLastest } from "../components/BlogLastest";
import { Blog } from "../components/Blog";

function Home() {
  return (
    <>
      <Hero_Sections />
      <Accordion />
      <About />
      <Exclusive />
      <Destination />
      <CeoAbout />
      <BlogLastest />
      <Blog />
    </>
  );
}

export { Home };
