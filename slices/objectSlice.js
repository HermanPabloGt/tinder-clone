import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attribute: 0,
};

export const objectSlice = createSlice({
  name: "object",
  initialState,
  reducers: {
    setAttribute: (state, action) => {
      state.attribute = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAttribute } = objectSlice.actions;

export const selectAttribute = (state) => state.object.attribute;

export default objectSlice.reducer;
