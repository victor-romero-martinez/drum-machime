import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PowerState {
  isOff: boolean;
}

const initialState: PowerState = {
  isOff: false,
};

const powerSlice = createSlice({
  name: "power",
  initialState,
  reducers: {
    setPower(state, action: PayloadAction<boolean>) {
      state.isOff = action.payload;
    },
  },
});

export const { setPower } = powerSlice.actions;
export default powerSlice.reducer;
