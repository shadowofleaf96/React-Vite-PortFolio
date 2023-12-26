import React from "react";
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
    </ThemeProvider>
  );
}

export default App;
