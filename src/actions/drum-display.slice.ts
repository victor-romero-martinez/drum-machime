import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DisplayState {
  name: string;
}

const initialState: DisplayState = {
  name: "",
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = displaySlice.actions;
export default displaySlice.reducer;
