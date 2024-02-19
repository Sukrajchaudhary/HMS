import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateAppoinments,getUserAppointments ,} from "./appoinmentAPI";

const initialState = {
  status: "idle",
  appoinments: [],
  createStatus:false
};

export const createAppoinmentAsync = createAsyncThunk(
  "appoinment/CreateAppoinments",
  async (appoinmentInfo) => {
    const response = await CreateAppoinments(appoinmentInfo);
    return response.data;
  }
);
export const getUserAppointmentsAsync = createAsyncThunk(
  "appoinment/getUserAppointments",
  async () => {
    const response = await getUserAppointments();
    return response.data;
  }
);

export const appoinmentSlice = createSlice({
  name: "appoinment",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAppoinmentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createAppoinmentAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.createStatus = true;
      })
      .addCase(getUserAppointmentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserAppointmentsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.appoinments = action.payload;
      });
  },
});

export const { increment } = appoinmentSlice.actions;

export const Appoinments = (state) => state.appoinment.appoinments;
export const userAppoinment=(state)=>state.appoinment.appoinments;
export const createAppoinmentSattaus=(state)=>state.appoinment.createStatus

export default appoinmentSlice.reducer;
