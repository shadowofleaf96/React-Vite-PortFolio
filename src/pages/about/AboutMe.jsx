import React, { useState, useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  Avatar,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      id="about-me"
      className="text-black p-8 md:p-16 rounded-lg flex items-center justify-center scroll-mt-64 md:scroll-mt-28"
    >
      <div className="max-w-screen-md text-center">
        <Typography
          variant="h1"
          color="black"
          className="underline font-medium text-4xl md:text-5xl"
        >
          About Me
        </Typography>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center mt-12">
          <Tilt className="flex justify-center" tiltMaxAngleY={10} tiltMaxAngleX={10}>
            <img
              alt="MK"
              src="/src/assets/images/about-profile-pic.png"
              className="w-2/3 md:w-1/3 md:hidden h-auto object-cover rounded-full mb-4"
            />
          </Tilt>

          <div className="mr-0 md:mr-16 text-left max-w-full md:max-w-sm md:min-h-full flex-grow mb-4">
            <Typography
              color="black"
              className=" mb-4 mt-4 font-normal text-sm md:text-base"
            >
              Enthusiastic IT and Full Stack MERN developer, eager to know more,
              passionate about web and IT development, seeking hands-on
              experience to grow as a skilled developer.
            </Typography>
            <div className="w-[22rem]">
              <Timeline>
                <TimelineItem className="h-28 hover:scale-105 transition-transform">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white  dar py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon className="p-3" variant="ghost">
                      <Avatar
                        src="/src/assets/images/arkx_logo.png"
                        alt="ARK-X Logo"
                        style={{ objectFit: "contain" }}
                        size="md"
                      />
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography variant="h6" color="blue-gray">
                        ARK-X TALENT FACTORY - Full Stack MERN Trainee
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        08/2023 - CURRENT
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28 hover:scale-105 transition-transform">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white dark:bg-black py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon className="p-3" variant="ghost">
                      <Avatar
                        src="/src/assets/images/freelance-icon.png"
                        alt="Freelacne Logo"
                        style={{ objectFit: "contain" }}
                        size="md"
                      />
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography variant="h6" color="blue-gray">
                        FREELANCE - Mobile and Windows junior Developer
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        01/2020 - 05/2022
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28 hover:scale-105 transition-transform">
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white dark:bg-black py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon className="p-3" variant="ghost">
                      <Avatar
                        src="/src/assets/images/leoni-ag-logo.png"
                        alt="ARK-X Logo"
                        style={{ objectFit: "contain" }}
                        size="md"
                      />
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography variant="h6" color="blue-gray">
                        LEONI BOUZNIKA - Crimping Maintenance Technician
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        05/2019 - 05/2021
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <Tilt  tiltMaxAngleY={10} tiltMaxAngleX={10} gyroscope={true}>
            <img
              alt="MK"
              src="/src/assets/images/about-profile-pic.png"
              className="h-auto object-cover rounded-full hidden md:block"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
