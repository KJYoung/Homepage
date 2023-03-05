import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export enum TabState {
  MAIN = 0, PUBLIC = 1, PRIVATE = 2, GALLERY = 3, NEW = 4
};

export enum LanguageState {
  KOREAN = 0, ENGLISH = 1, FRENCH = 2
};

export enum DarkLightState {
  LIGHT = 0, DARK = 1
};

export interface CoreState {
  selectedTab: TabState; // Selected Tab Number.
  language: LanguageState; // Selected Language.
  darkLight: DarkLightState; // Selected Mode(Dark, Light).
}
const initialState: CoreState = {
 selectedTab: TabState.MAIN,
 language: LanguageState.KOREAN,
 darkLight: DarkLightState.LIGHT,
};

export const coreSlice = createSlice(
  {
    name: "core",
    initialState,
    reducers: {
      setTab: (state: any, action: PayloadAction<{ selectedTab: TabState; }>) => {
        state.selectedTab = action.payload.selectedTab;
      },
      setLang: (state: any, action: PayloadAction<{ language: LanguageState; }>) => {
        state.language = action.payload.language;
      },
      setDarkLight: (state: any, action: PayloadAction<{ darkLight: DarkLightState; }>) => {
        state.darkLight = action.payload.darkLight;
      },
    },
  }
);

export const coreActions = coreSlice.actions;
export const selectCore = (state: RootState) => state.core;
export default coreSlice.reducer;