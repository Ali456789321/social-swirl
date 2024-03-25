import { configureStore } from "@reduxjs/toolkit";
import slice from "../features/slice";

 const store = configureStore({
    reducer:{
        count: slice
    },
})

export default store