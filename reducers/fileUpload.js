import { createReducer } from "@reduxjs/toolkit";

const intialState = {
};
export const fileUploadReducer = createReducer(intialState, {
  fileUploadRequest:(state)=>{
    state.loading=true
  },
  fileUploadSuccess:(state,action)=>{
    state.loading=false,
    state.message=action.payload
  },
  fileUploadFail:(state,action)=>{
    state.loading=false,
    state.error=action.payload
  },

  getFileRequest:(state)=>{
    state.loading=true
  },
  getFileSuccess:(state,action)=>{
    state.loading=false
    state.image=action.payload
  },
  getFileFail:(state,action)=>{
    state.loading=false,
    state.error=action.payload
  }
})
