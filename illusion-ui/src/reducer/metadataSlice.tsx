import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchImageListCall } from "../service/metadata.service";

export const fetchImageList = createAsyncThunk(
  "metadata/imagelist",
  fetchImageListCall
);
const metadataSlice = createSlice({
  name: "metadata",
  initialState: {
    imageList: [] as string[],
    status: {} as any,
  },
  reducers: {
    // setImageList: (imageList) => (imageList ),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImageList.pending, (state, action : any) => {
        state.status[action.meta.arg] = 'pending'
    })
    builder.addCase(fetchImageList.fulfilled, (state, action : any) => {
        state.status[action.meta.arg] = 'succeed'
        state.imageList = action.payload;
    })
    builder.addCase(fetchImageList.rejected, (state, action : any) => {
        state.status[action.meta.arg] = 'failed'
    })
  }
});

// export const {} = metadataSlice.actions;

export default metadataSlice.reducer
