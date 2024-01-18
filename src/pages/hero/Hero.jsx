import React, { useState, useEffect, useMemo } from "react";
import { Button, Typography } from "@material-tailwind/react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typewriter from "typewriter-effect";
import Confetti from "react-confetti";
import Tilt from "react-parallax-tilt";

function Hero() {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [init, setInit] = useState(false);

  const esterOnClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 9) {
      setShowEasterEgg(true);
    }
  };

  useEffect(() => {
    if (showEasterEgg) {
      const timeoutId = setTimeout(() => {
        setClickCount(0);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [showEasterEgg]);

  const handleButtonClick = (link) => {
    if (link.startsWith("#")) {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(link, "_blank");
    }
  };

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#7393B3",
        },
        links: {
          color: "#7393B3",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center h-screen">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className="flex mr:0 md:mr-16 w-2/3 md:w-1/3 lg:w-4/12 xl:w-1/3 items-center justify-center">
          <Tilt tiltMaxAngleY={3} tiltMaxAngleX={3}>
            <img
              src="../../../images/profile-pic.png"
              alt="MK"
              className="mb-8 w-full h-auto object-cover rounded-full"
              onClick={esterOnClick}
            />
          </Tilt>

          {showEasterEgg && (
            <div>
              <Confetti numberOfPieces={1000} recycle={false} />
            </div>
          )}
        </div>
        <div className="md:w-2/4 flex md:flex flex-col items-start justify-center">
          <Typography
            variant="h1"
            className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold xl:text-8xl text-blue-gray-900 dark:text-gray-200 font-poppins"
          >
            Hi, I'm Mohammed Kotbi
          </Typography>

          <Typography className="mb-8 text-second dark:text-gray-200 text-md md:text-lg font-poppins">
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Web Developer",
                  "An Android Developer",
                  "A PC Gamer",
                  "A PC Builder",
                  "A PC Repair Technician",
                  "A YouTuber",
                ],
                autoStart: true,
                delay: 50,
                loop: true,
              }}
            />
          </Typography>

          <div className="flex flex-col items-start md:flex-row md:items-start mb-4 md:mb-8 mx-auto md:mx-0">
            <Button
              onClick={() =>
                handleButtonClick(
                  "https://drive.google.com/file/d/1s-KhVWyP3t5JRhRtcRi29rkR091zkjNH/view?usp=sharing"
                )
              }
              ripple={true}
              className="font-poppins bg-second text-white border-2 border-second hover:bg-green-500 hover:border-green-500 transition duration-300 mb-4 md:mr-2 dark:bg-second dark:hover:bg-green-500 dark:text-gray-200 dark:hover:border-green-500"
            >
              View My Resume
            </Button>

            <Button
              ripple={true}
              onClick={() => handleButtonClick("#contact-me")}
              className="font-poppins bg-transparent dark:bg-black text-black border-2 border-second hover:border-green-500 hover:text-green-500 transition duration-300 mb-4 md:mr-2 dark:text-white dark:hover:border-green-500 dark:hover:text-green-500"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
