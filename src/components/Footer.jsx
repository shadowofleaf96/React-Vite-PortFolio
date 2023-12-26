import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

function Footer() {
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <footer className="w-full rounded-lg border shadow-md bg-white dark:bg-black">
      <div className="flex flex-col items-center">
        <div className="flex">
          <Button
            variant="text"
            aria-label="LinkedIn"
            onClick={() =>
              handleButtonClick("https://www.linkedin.com/in/mkotbi/")
            }
          >
            <Icon
              icon="mdi:linkedin"
              height={36}
              width={36}
              style={{ marginRight: "2px" }}
            />
          </Button>
          <Button
            variant="text"
            aria-label="GitHub"
            onClick={() =>
              handleButtonClick("https://github.com/shadowofleaf96")
            }
          >
            <Icon
              icon="mdi:github"
              height={36}
              width={36}
              style={{ marginRight: "2px" }}
            />
          </Button>
          <Button
            variant="text"
            aria-label="YouTube"
            onClick={() =>
              handleButtonClick(
                "https://www.youtube.com/channel/UC9_eEbHsL_1TL1O67Fwe7Yw"
              )
            }
          >
            <Icon
              icon="mdi:youtube"
              height={36}
              width={36}
              style={{ marginRight: "2px" }}
            />
          </Button>
        </div>

        <Typography color="blue-gray" size="lg" className="text-center mt-2 font-normal font-poppins">
          © 2023 Shadow Of Leaf. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
