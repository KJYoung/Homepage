import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface TodoType { id: number; title: string; content: string; done: boolean; }
export interface TodoState {
    selectedTab: number;
}
const initialState: TodoState = {
 selectedTab: 0
};

export const coreSlice = createSlice({
    name: "core",
    initialState,
    reducers: {
      setTab: (state: any, action: PayloadAction<{ selectedTab: number; }>) => {
        state.selectedTab = action.payload.selectedTab;
      },
   }, });

   export const coreActions = coreSlice.actions;
   export const selectCore = (state: RootState) => state.core;
   export default coreSlice.reducer;