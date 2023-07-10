import { Link, Typography } from "@mui/material";
import { FC } from "react";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        About me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Hey there, I'm Yuancan Zhang, a tech enthusiast with a passion for
        blending creativity and innovation. I created this toy website for fun.
        Feel free to reach out via email at yuancanzhang@outlook.com or connect
        with me on{" "}
        <Link href="https://www.linkedin.com/in/yuancan-hector-zhang-a97b451aa/">
          LinkedIn
        </Link>
        .
        <Typography variant="caption" display="block" gutterBottom>
          Yuancan Zhang
        </Typography>
      </Typography>
    </>
  );
};

export default AboutMe;
