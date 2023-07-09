import axios from "axios";
import { BE_API_URL } from "../constant";
export const fetchImageListCall = async (_: void, { rejectWithValue }: any) => {
  await axios
    .get(BE_API_URL + "/getImages")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return rejectWithValue(error?.data ? error?.data : error);
    });
};
