import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpdateProfile, } from "./UserUpdateAPI";

const initialState = {
  value: 0,
  status: "idle",
  profile: [],
};

export const UpdateProfileAsync = createAsyncThunk(
  "user/UpdateProfile",
  async (formData) => {
    const response = await UpdateProfile(formData);
    return response.data;
  }
);

export const updateUserSlice = createSlice({
  name: "user", // Correcting the slice name to "user"
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(UpdateProfileAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateProfileAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.profile.findIndex(
          (profile) => profile.id === action.payload._id // Corrected action.payload.id
        );
        state.profile[index] = action.payload;
      });
  },
});

export const {} = updateUserSlice.actions;
export const userProfile = (state) => state.user.profile;

export default updateUserSlice.reducer;
