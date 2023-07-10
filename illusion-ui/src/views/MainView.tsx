import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { addImage, fetchImageList } from "../reducer/metadataSlice";

interface MainViewProps {}

const MainView: FC<MainViewProps> = () => {
  const dispatch = useDispatch<any>();
  const handleFetch = () => {
    dispatch(fetchImageList());
  };
  const handleSubmit = () => {
    dispatch(
      addImage({
        name: "mock",
        description: "this is a test image",
        imageUrl: "fakeUrl",
      })
    );
  };
  return (
    <>
      <Grid container spacing={1}>
        <Typography variant="h3">Check out other people's creation</Typography>
      </Grid>
      <Button variant="contained" onClick={() => handleFetch()}>
        Refresh
      </Button>
      <Button variant="contained" onClick={() => handleSubmit()}>
        Test Submit
      </Button>
    </>
  );
};

export default MainView;
