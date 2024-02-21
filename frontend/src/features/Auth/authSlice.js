import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateUsers, LoginUsers, getUsers, ResetPassword } from "./authAPI";

const initialState = {
  error: null,
  loginInfo: null,
  status: "idle",
  userDetail: null,
  sentmail: false,
};

export const createUserAsync = createAsyncThunk(
  "auth/CreateUsers",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await CreateUsers(userdata);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const LoginUserAsync = createAsyncThunk(
  "auth/LoginUsers",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await LoginUsers(userdata);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const ResetPasswordAsync = createAsyncThunk(
  "auth/ResetPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await ResetPassword(email);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getUsersAsync = createAsyncThunk("auth/getUsers", async () => {
  const response = await getUsers();
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
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
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loginInfo = action.payload;
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(ResetPasswordAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ResetPasswordAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.sentmail = true;
      })
      .addCase(ResetPasswordAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(LoginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LoginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loginInfo = action.payload;
      })
      .addCase(LoginUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(getUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userDetail = action.payload;
      });
  },
});

export const {} = authSlice.actions;
export const loginResponse = (state) => state.auth.loginInfo;
export const error = (state) => state.auth.error;
export const userinfo = (state) => state.auth.userDetail;
export const Mail=(state)=>state.auth.sentmail

export default authSlice.reducer;
