/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IELementTypes } from "./types";

const BASE_URL = "https://650af6bedfd73d1fab094cf7.mockapi.io";

const getAllElements = createAsyncThunk(
  "elements/getAllElements",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IELementTypes[]>(`${BASE_URL}/elements`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const createElement = createAsyncThunk(
  "elements/createElement",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/elements`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export { getAllElements, createElement };
