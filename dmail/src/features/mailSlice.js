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
    currentUser: null,
    showMailType: "inbox",
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
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setShowMailType: (state, action) => {
      state.showMailType = action.payload;
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
  setCurrentUser,
  setShowMailType,
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectIsLogged = (state) => state.mail.isLogged;
export const selectCurrentUser = (state) => state.mail.currentUser;
export const selectCurrentMailType = (state) => state.mail.showMailType;
export default mailSlice.reducer;
