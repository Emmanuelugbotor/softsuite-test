/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createSlice } from "@reduxjs/toolkit";
import { IELementTypes, BlockType, block } from "./types";
import { getAllElements } from "./actions";

interface IELementState {
  getAllElements: BlockType<IELementTypes[]>;
}

const initialState: IELementState = {
  // @ts-ignore
  getAllElements: { ...block },
};

export const elementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllElements.pending, (state) => {
        return {
          ...state,
          getAllElements: { ...state.getAllElements, loading: true },
        };
      })
      .addCase(getAllElements.fulfilled, (state, action) => {
        return {
          ...state,
          getAllElements: {
            ...state.getAllElements,
            loading: false,
            data: action.payload,
            success: true,
          },
        };
      })
      .addCase(getAllElements.rejected, (state, action) => {
        return {
          ...state,
          getAllElements: {
            ...state.getAllElements,
            loading: false,
            error: action.error.message,
          },
        };
      });
  },
});

export const elementReducer = elementSlice.reducer;
