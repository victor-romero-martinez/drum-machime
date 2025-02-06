import { configureStore } from "@reduxjs/toolkit";
import changeDrumReducer from "../actions/drum-change.slice";
import displayReducer from "../actions/drum-display.slice";
import powerReducer from "../actions/drum-power.slice";
import volumenReducer from "../actions/drum-vol.slice";

export const store = configureStore({
  reducer: {
    display: displayReducer,
    volumen: volumenReducer,
    power: powerReducer,
    switchDrum: changeDrumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
