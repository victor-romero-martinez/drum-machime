import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VolumenState {
  value: number;
}

const initialState: VolumenState = {
  value: 0.5,
};

const volumenSlice = createSlice({
  name: "volumen",
  initialState,
  reducers: {
    setVol(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { setVol } = volumenSlice.actions;
export default volumenSlice.reducer;
