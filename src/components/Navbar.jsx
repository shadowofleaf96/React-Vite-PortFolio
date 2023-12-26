import React, {useState, useEffect} from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
  Card,
  Avatar,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const pages = ["About Me", "Skills", "Projects", "Contact Me"];

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {pages.map((page) => (
        <Typography
          key={page}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href={`#${page.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center hover:text-second transition-colors"
            onClick={() => setOpenNav(false)} // Close the navbar on click
          >
            {page}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-lg px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-black">
        <a href="#" className="cursor-pointer">
          <div className="flex items-center">
            <Avatar
              alt="MK"
              withBorder={true}
              src="../../../images/mrtech_white.png"
              className="p-0.5"
              style={{ objectFit: "cover" }}
            />
            <span className="ml-2 text-2xl font-semibold">MK</span>
          </div>
        </a>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-m-1">
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.youtube.com/channel/UC9_eEbHsL_1TL1O67Fwe7Yw",
                  "_blank"
                );
              }}
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
            >
              <Icon
                icon="mdi:youtube"
                height={32}
                width={32}
                style={{ fontSize: "1.5em", marginRight: "5px" }}
              />
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.open("https://github.com/shadowofleaf96", "_blank");
              }}
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
            >
              <Icon
                icon="mdi:github"
                height={32}
                width={32}
                style={{ fontSize: "1.5em", marginRight: "5px" }}
              />
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.linkedin.com/in/mkotbi/", "_blank");
              }}
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
            >
              <Icon
                icon="mdi:linkedin"
                height={32}
                width={32}
                style={{ fontSize: "1.5em", marginRight: "5px" }}
              />
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.youtube.com/channel/UC9_eEbHsL_1TL1O67Fwe7Yw",
                "_blank");
                setOpenNav(!openNav)
            }}
            variant="text"
            size="sm"
            className=""
          >
            <Icon
              icon="mdi:youtube"
              height={24}
              width={24}
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/shadowofleaf96", "_blank");
              setOpenNav(!openNav)
            }}
            variant="text"
            size="sm"
            className=""
          >
            <Icon
              icon="mdi:github"
              height={24}
              width={24}
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.linkedin.com/in/mkotbi/", "_blank");
              setOpenNav(!openNav)
            }}
            variant="text"
            size="sm"
            className=""
          >
            <Icon
              icon="mdi:linkedin"
              height={24}
              width={24}
              style={{ fontSize: "1.5em", marginRight: "5px" }}
            />
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
