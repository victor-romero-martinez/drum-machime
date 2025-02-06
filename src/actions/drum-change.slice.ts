import { createSlice } from "@reduxjs/toolkit";

interface ChangeState {
  switchDrum: boolean;
}

const initialState: ChangeState = {
  switchDrum: false,
};

const switchReducer = createSlice({
  name: "switchDrum",
  initialState,
  reducers: {
    setSwitchDrum(state) {
      state.switchDrum = !state.switchDrum;
    },
  },
});

export const { setSwitchDrum } = switchReducer.actions;
export default switchReducer.reducer;
