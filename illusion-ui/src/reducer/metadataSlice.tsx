import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addImageCall, fetchImageListCall } from "../service/metadata.service";

export const fetchImageList = createAsyncThunk(
  "metadata/imagelist",
  fetchImageListCall
);

export const addImage = createAsyncThunk("action/addImage", addImageCall);
const metadataSlice = createSlice({
  name: "metadata",
  initialState: {
    imageList: [] as any,
    status: {} as any,
  },
  reducers: {
    // setImageList: (state, action) => {
    //   const res = action.payload
    //   console.log('res', res)
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImageList.pending, (state, action: any) => {
      state.status["fetchImage"] = "pending";
    });
    builder.addCase(fetchImageList.fulfilled, (state, action: any) => {
      state.imageList = action.payload;
      state.status["fetchImage"] = "succeed";
    });
    builder.addCase(fetchImageList.rejected, (state, action: any) => {
      state.status["fetchImage"] = "failed";
    });
    builder.addCase(addImage.pending, (state, action: any) => {
      state.status["addImage"] = "pending";
    });
    builder.addCase(addImage.fulfilled, (state, action: any) => {
      state.status["addImage"] = "succeed";
      console.log("creation succeeded");
    });
    builder.addCase(addImage.rejected, (state, action: any) => {
      state.status["addImage"] = "failed";
    });
  },
});

// export const {} = metadataSlice.actions;
// export const {setImageList} = metadataSlice.actions;
export default metadataSlice.reducer;
