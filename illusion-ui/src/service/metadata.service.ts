import axios from "axios";
import { BE_API_URL } from "../constant";
import { imageCreation } from "../model/model";
export const fetchImageListCall = async (
  _: void,
  { rejectWithValue }: any
): Promise<any> => {
  return axios
    .get(BE_API_URL + "/getImages")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return rejectWithValue(error?.data ? error?.data : error);
    });
};

export const addImageCall = async (
  image: imageCreation,
  { rejectWithValue }: any
) => {
  return axios
    .post(BE_API_URL + "/addImage", image)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return rejectWithValue(error?.data ? error?.data : error);
    });
};
