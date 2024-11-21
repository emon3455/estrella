import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  menuToggle: true,
} as any;

export const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    setMenuToggle: (state: any, action: any) => {
      state.menuToggle = action.payload;
    },
  },
});

export const { setMenuToggle } = adminSlice.actions;

export default adminSlice.reducer;
