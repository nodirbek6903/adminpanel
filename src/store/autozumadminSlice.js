import { createSlice } from "@reduxjs/toolkit";

const initialCars = {
  color:  {
    name:"",
    value:"Color"
  },
  year:  {
    name:"",
    value:"Yil"
  },
  seconds:  {
    name:"",
    value:"Seconds"
  },
  speed:  {
    name:"",
    value:"Speed"
  },
  people: {
    name:"",
    value:"Max People"
  },
  motor:  {
    name:"",
    value:"Motor"
  },
  transmission:  {
    name:"",
    value:"Transmission"
  },
  drive_side:  {
    name:"",
    value:"Drive Side"
  },
  oyls:  {
    name:"",
    value:"Yoqilg'i"
  },
  limitperday:  {
    name:"",
    value:"Limit Per Day"
  },
  deposit:  {
    name:"",
    value:"Deposit"
  },
  premium_pro_price:  {
    name:"",
    value:"Premium Protection Price"
  },
  price_aed:  {
    name:"",
    value:"Price in AED"
  },
  price_aed_otd:  {
    name:"",
    value:"Price in AED (Otd)"
  },
  price_usd:  {
    name:"",
    value:"Price in USD(Otd)"
  },
  price_usd_otd:  {
    name:"",
    value:"Price in USD(Otd)"
  },
};

const initialState = {
  actioncars: "",
  cars: initialCars,
  categories: "",
  brand: "",
  model: "",
  locatsiya: "",
  city: "",
};
const autozumadmin = createSlice({
  name: "autozumadmin",
  initialState,
  reducers: {
    actionCars(state, action) {
      state.actioncars = action.payload;
    },
    handlehangeCars(state, action) {
      const { name, value } = action.payload;
      state.cars[name].name = value;
    },
    setCategory(state,action){
      state.categories = action.payload
    },
    setBrand(state,action){
      state.brand = action.payload
    },
    setModel(state,action){
      state.model = action.payload
    },
    setLocatsia(state,action){
      state.locatsiya = action.payload
    },
    setCity(state,action){
      state.city = action.payload
    }

  },
});

export const { actionCars, handlehangeCars,setBrand,setCategory,setCity,setLocatsia,setModel } = autozumadmin.actions;

export default autozumadmin.reducer;
