import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { AppThunk, RootState } from "../../store";
export interface Modal {
  isVisible: boolean;
  onClose?: Function;
  onOpen?: Function;
  children?: React.ReactNode;
}
interface AppSettingsState {
  modal: Modal;
}
const initialState = {
  modal: {
    isVisible: true,
  },
} as AppSettingsState;

const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<Modal>) => {
      state.modal = action.payload;
    },
    hideModal: (state) => {
      state.modal = { isVisible: false };
    },
  },
});
export const { setModal, hideModal } = appSettingsSlice.actions;
export default appSettingsSlice.reducer;
export const getModal = (state: RootState) => state.appSettings.modal;
