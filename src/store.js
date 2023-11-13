import {configureStore} from "@reduxjs/toolkit"
import { fileUploadReducer } from "../reducers/fileUpload"

export const store=configureStore({
    reducer:{
        fileUpload:fileUploadReducer
    }
})