import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetAllusersAppoinments,
  CreateBlog,
  CreateDoctorAccount,
  GetsAllBlogs,
  UpdateUserAppoinments
} from "./adminAPI";

const initialState = {
  status: "idle",
  allAppoinments: [],
  blog: [],
  totalAppoinment: 0,
  doctor: null,
};

export const GetAllusersAppoinmentsAsync = createAsyncThunk(
  "admin/GetAllusersAppoinments",
  async (pagination) => {
    const response = await GetAllusersAppoinments(pagination);
    return response.data;
  }
);
export const CreateBlogAsync = createAsyncThunk(
  "admin/CreateBlog",
  async (userInfo) => {
    const response = await CreateBlog(userInfo);
    return response.data;
  }
);
export const CreateDoctorAccountAsync = createAsyncThunk(
  "admin/CreateDoctorAccount",
  async (doctorInfo) => {
    const response = await CreateDoctorAccount(doctorInfo);
    return response.data;
  }
);
export const GetsAllBlogsAsync = createAsyncThunk(
  "admin/GetsAllBlogs",
  async () => {
    const response = await GetsAllBlogs();
    return response.data;
  }
);
export const UpdateUserAppoinmentsAsync = createAsyncThunk(
  "admin/UpdateUserAppoinments",
  async (update) => {
    const response = await UpdateUserAppoinments(update);
    return response.data;
  }
);

export const admineSlice = createSlice({
  name: "admin",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(GetAllusersAppoinmentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetAllusersAppoinmentsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.allAppoinments = action.payload.Allappoinmnet;
        state.totalAppoinment = action.payload.total;
      })
      .addCase(CreateBlogAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateBlogAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.blog = action.payload;
      })
      .addCase(CreateDoctorAccountAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(CreateDoctorAccountAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.blog = action.payload;
      })
      .addCase(GetsAllBlogsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetsAllBlogsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.blog = action.payload;
      })
      .addCase(UpdateUserAppoinmentsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateUserAppoinmentsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index=state.allAppoinments.findIndex((app)=>app._d===action.payload._id)
        state.allAppoinments[index] = action.payload;
      });
  },
});

export const {} = admineSlice.actions;
export const Allappoinments = (state) => state.admin.allAppoinments;
export const blog = (state) => state.admin.blog;
export const Toatls = (state) => state.admin.totalAppoinment;
export const CreatedDoctor = (state) => state.admin.doctor;

export default admineSlice.reducer;
