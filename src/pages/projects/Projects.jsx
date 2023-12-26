import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";

const projectsData = [
  {
    id: 1,
    image: "../../../images/imusic.png",
    title: "IMusic Android App",
    description:
      "Welcome to the ultimate Android music player that is designed to enhance your listening experience, it is based on Timber Music Player, created using Java on Android Studio.",
    liveDemoLink:
      "https://play.google.com/store/apps/details?id=ma.mk.imusic&pli=1",
    sourceCodeLink:
      "https://xdaforums.com/t/4-2-imusic-a-elegant-music-player.4115007/",
  },
  {
    id: 2,
    image: "../../../images/OldPortfolio.png",
    title: "My Old PortFolio",
    description:
      "Welcome to my portfolio, a simple and elegant showcase of my work and skills. This portfolio is created using only HTML, CSS, and JavaScript, highlighting my abilities in web development and design.",
    liveDemoLink: "https://shadowofleaf96.github.io/",
    sourceCodeLink: "https://github.com/shadowofleaf96/PortFolio",
  },
  {
    id: 3,
    image: "../../../images/pcpartproject.png",
    title: "PC Parts Ecommerce Shop",
    description:
      "Welcome to the MRTech Ecommerce Shop, a simple and lightweight online store for purchasing PC components. This project is built using HTML, CSS, JavaScript, and Tailwind CSS, making it easy to understand and customize.",
    liveDemoLink: "https://shadowofleaf96.github.io/shoppingCart",
    sourceCodeLink: "https://github.com/shadowofleaf96/EcommerceWebsite",
  },
  {
    id: 4,
    image: "../../../images/Blog.png",
    title: "TechBlog",
    description:
      "Welcome to TechBlog, an open-source gaming blog created with Tailwind CSS, EJS, and Express.js. TechBlog is designed to be a lightweight and customizable platform for gamers and enthusiasts.",
    liveDemoLink: "https://blog-website-7mkl.onrender.com/",
    sourceCodeLink: "https://github.com/shadowofleaf96/BlogWebsite",
  },
  {
    id: 5,
    image: "../../../images/GreenVille.png",
    title: "GreenVille Ecommerce Shop Project",
    description:
      "Welcome to GreenVille, an open-source MERN (MongoDB, Express.js, React.js, Node.js) stack ecommerce shop project. GreenVille is designed to provide a foundation for building a robust and scalable online bio Organic store.",
    liveDemoLink: "https://greenville-frontend.onrender.com/",
    sourceCodeLink:
      "https://github.com/shadowofleaf96/GreenVille-Ecommerce_Final_Project",
  },
  {
    id: 6,
    image: "../../../images/tadkir.png",
    title: "Tadkir WPF App",
    description:
      "Welcome to Tadkir, simple Windows Presentation Foundation (WPF) application designed to encourage and remind users about the importance of reading the Quran.",
    liveDemoLink: "https://github.com/shadowofleaf96/Tadkir",
    sourceCodeLink: "https://github.com/shadowofleaf96/Tadkir",
  },
];

function ProjectCard({ project }) {
  const [isHovered, setHovered] = React.useState(false);

  const blurProps = useSpring({
    filter: isHovered ? "blur(5px)" : "blur(0px)",
    opacity: isHovered ? 0.9 : 1,
  });

  const overlayProps = useSpring({
    opacity: isHovered ? 1 : 0,
  });

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      color="white"
      className="w-full max-w-sm relative mx-auto mb-8 md:max-w-screen-md"
    >
      <animated.div style={blurProps}>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-t-lg object-cover w-full h-64 md:h-64"
        />
        <Typography className="text-lg text-black flex justify-center font-semibold mx-3 my-6 font-poppins">
          {project.title}
        </Typography>
      </animated.div>
      <animated.div
        style={{
          ...overlayProps,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255,255,255,0.9)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography className="text-xl text-black font-semibold mb-2 font-poppins">
          {project.title}
        </Typography>

        <CardBody>
          <p className="text-sm text-black">{project.description}</p>
        </CardBody>

        <div className="flex mt-3">
          <Button
            variant="text"
            onClick={() => handleButtonClick(project.liveDemoLink)}
            className="mr-4 flex items-center rounded-full text-second font-medium"
          >
            <Icon
              icon="material-symbols-light:play-circle"
              height={52}
              width={52}
              style={{ marginRight: "5px" }}
            />
            <span>Live Demo</span>
          </Button>
          <Button
            variant="text"
            onClick={() => handleButtonClick(project.sourceCodeLink)}
            className="flex items-center rounded-full text-second font-medium"
          >
            <Icon
              icon="mdi:github"
              height={52}
              width={52}
              style={{ marginRight: "5px" }}
            />
            <span>Source Code</span>
          </Button>
        </div>
      </animated.div>
    </Card>
  );
}

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      id="projects"
      className="flex flex-col items-center p-4 md:p-8 scroll-mt-64 md:scroll-mt-28"
    >
      <div className="w-full text-center">
        <Typography
          variant="h1"
          color="black"
          className="underline text-center font-medium text-4xl md:text-5xl font-poppins"
        >
          My Projects
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 items-center mt-12">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} className="mb-4" />
        ))}
      </div>
    </div>
  );
}

export default Projects;
