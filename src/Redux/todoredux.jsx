import { createSlice } from "@reduxjs/toolkit";

const Todoslice=createSlice({
    name:'todo',
    initialState:{value:[{name:''}]},
    reducers: {
  addvalue: (state, action) => {
    state.value.push({...action.payload,id:Date.now()})
  },
  removevalue:(state,action)=>{
    state.value = state.value.filter((value)=>value.id !== action.payload)
  },
  }
});

export const {addvalue,removevalue}=Todoslice.actions;
export default Todoslice.reducer;