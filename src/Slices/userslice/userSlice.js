/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../ApiInstance/chateApi";

// create user
export const createUser = createAsyncThunk(
  "user/createuser",
  async (data, thunkApi) => {
    try {
      const res = await api.post("/api/register", data);
      console.log(res, "response");
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);

// logi user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, thunkApi) => {
    try {
      const res = await api.post("/api/login", data);
      if (res.data) {
        return res.data;
      } else {
        return null;
      }
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);

// getAdminDeati
export const getAdminDetail = createAsyncThunk(
  "user/getAdminDetail",
  async (_, thunkApi) => {
    try {
      const res = await api.get("/api/detailAdmin");
      if (res.data) {
        console.log(res.data, "response og the admiin detail");
        return res.data;
      } else {
        return null;
      }
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.response?.data?.message);
    }
  }
);

// slice of he user
const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    isLoading: false,
  },
  reducers: {},
  // extraReducer for the create us
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUser.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(loginUser.fulfilled,(state)=>{
        state.isLoading=false
      })
      .addCase(loginUser.rejected,(state)=>{
        state.isLoading=false
      })
      .addCase(getAdminDetail.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(getAdminDetail.fulfilled,(state,action)=>{
        state.userData=action.payload,
        state.isLoading=false
      })
      .addCase(getAdminDetail.rejected,(state)=>{
        state.userData=null,
        state.isLoading=false
      })
  },
});

export const userReducer = userSlice.reducer;
