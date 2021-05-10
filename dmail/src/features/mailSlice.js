import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    isLogged: false,
    selectedMail: null,
    sendMessageIsOpen: false,
    inbox: [],
    trash: [],
    starred: [],
    username: null,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    signIn: (state) => {
      state.isLogged = true;
    },
    signOut: (state) => {
      state.isLogged = false;
    },
  },
});

//Actions
export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
  signIn,
  signOut,
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectIsLogged = (state) => state.mail.isLogged;
export default mailSlice.reducer;
