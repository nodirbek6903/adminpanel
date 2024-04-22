import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 actioncars:""
};

const autozumadmin = createSlice({
  name: "autozumadmin",
  initialState,
  reducers: {
    actionCars(state, action) {
      state.actioncars = action.payload;
    },
  },
});

export const {
actionCars
} = autozumadmin.actions;

export default autozumadmin.reducer;
