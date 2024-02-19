import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getallDoctors, getDoctorsById } from "../Doctors/doctorAPI";

const initialState = {
  status: "idle",
  Doctor: [],
  selectedDoctor: [],
};

export const getallDoctorsAsync = createAsyncThunk(
  "doctor/getallDoctors",
  async () => {
    const response = await getallDoctors();
    return response.data;
  }
);
export const getDoctorsByIdAsync = createAsyncThunk(
  "doctor/getDoctorsById",
  async (id) => {
    const response = await getDoctorsById(id);
    return response.data;
  }
);

export const doctorSlice = createSlice({
  name: "doctor",
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
      .addCase(getallDoctorsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallDoctorsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.Doctor = action.payload;
      })
      .addCase(getDoctorsByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDoctorsByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedDoctor = action.payload;
      });
  },
});

export const { increment } = doctorSlice.actions;
export const AllDoctors = (state) => state.doctor.Doctor;
export const selectDoctor = (state) => state.doctor.selectedDoctor;

export default doctorSlice.reducer;
