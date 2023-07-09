import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { fetchImageList } from "../reducer/metadataSlice";

interface MainViewProps {}

const MainView: FC<MainViewProps> = () => {
  const dispatch = useDispatch<any>();
  const handleClick = () => {
    console.log("this is a main view page");
    dispatch(fetchImageList());
  };
  return (
    <>
      <Grid container spacing={1}>
        <Typography variant="h3">Check out other people's creation</Typography>
      </Grid>
      <Button variant="contained" onClick={() => handleClick()}>
        Refresh
      </Button>
    </>
  );
};

export default MainView;
