import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PATH_STRING, PagePath } from "../constant";

interface FloatingBarProps {
  textList: string[];
}

const FloatingBar: FC<FloatingBarProps> = ({ textList }) => {
  const [curTab, setCurTab] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: PagePath) => {
    setCurTab(newValue);
    navigate(PATH_STRING[newValue])
    console.log(`${newValue} is selected`);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={curTab} onChange={handleChange} centered>
        {textList.map((item: string, index: number) => (
          <Tab key={index} label={item} />
        ))}
      </Tabs>
    </Box>
  );
};

export default FloatingBar;
