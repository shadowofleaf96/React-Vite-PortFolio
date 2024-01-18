import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from "./components/Navbar";
import Hero from "./pages/hero/Hero";
import AboutMe from "./pages/about/AboutMe";
import Footer from "./components/Footer";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import ContactMe from "./pages/contact/ContactMe";
import ScrollUpButton from "./components/ScrollUpButton";
import "./App.css";

function App() {
  const Separator = () => {
    return <div className="border-t border-gray-300 my-8 w-full"></div>;
  };

  return (
    <ThemeProvider>
      <div className="bg-[#F5F5F5] dark:bg-[#111827] m-0 sm:pr-10 sm:pl-10 pr-12 pl-12 lg:pr-16 lg:pl-16 xl:pr-20 xl:pl-20 2xl:pr-24 2xl:pl-24">
        <NavBar />
        <Hero />
        <Separator />
        <AboutMe />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <ContactMe />
        <Footer />
        <ScrollUpButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
