import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
    {
      name: "MongoDB",
      icon: <Icon icon="devicon:mongodb" width="4em" height="4em" />,
      link: "https://www.mongodb.com/",
    },
    {
      name: "React",
      icon: <Icon icon="devicon:react" width="4em" height="4em" />,
      link: "https://reactjs.org/",
    },
    {
      name: "Express",
      icon: <Icon icon="devicon:express" width="4em" height="4em" />,
      link: "https://expressjs.com/",
    },
    {
      name: "Node.js",
      icon: <Icon icon="devicon:nodejs" width="4em" height="4em" />,
      link: "https://nodejs.org/",
    },
    {
      name: "Git",
      icon: <Icon icon="devicon:git" width="4em" height="4em" />,
      link: "https://git-scm.com/",
    },
    {
      name: "HTML",
      icon: <Icon icon="devicon:html5" width="4em" height="4em" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: <Icon icon="devicon:css3" width="4em" height="4em" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: <Icon icon="devicon:javascript" width="4em" height="4em" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Java",
      icon: <Icon icon="devicon:java" width="4em" height="4em" />,
      link: "https://www.java.com/",
    },
    {
      name: "Android",
      icon: <Icon icon="devicon:android" width="4em" height="4em" />,
      link: "https://developer.android.com/",
    },
    {
      name: "Linux",
      icon: <Icon icon="devicon:linux" width="4em" height="4em" />,
      link: "https://www.linux.org/",
    },
    {
      name: "C",
      icon: <Icon icon="devicon:c" width="4em" height="4em" />,
      link: "https://en.cppreference.com/w/c/language",
    },
    {
      name: "C++",
      icon: <Icon icon="devicon:cplusplus" width="4em" height="4em" />,
      link: "https://en.cppreference.com/w/cpp",
    },
    {
      name: "C#",
      icon: <Icon icon="devicon:csharp" width="4em" height="4em" />,
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="skills"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      className="text-black dark:text-white rounded-5 p-8 md:p-16 scroll-mt-64 md:scroll-mt-28"
    >
      <div className="w-full">
        <Typography
          variant="h1"
          color="black"
          className="underline text-center text-black dark:text-white font-medium text-4xl md:text-5xl font-poppins"
        >
          My Skills
        </Typography>
        <Marquee pauseOnHover>
          <div className="flex flex-nowrap overflow-x-auto mt-12">
            {skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4"
              >
                <div className="p-4 bg-primary rounded-full">{skill.icon}</div>
                <Typography variant="h6" align="center" className="ml-2 font-poppins">
                  {skill.name}
                </Typography>
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
