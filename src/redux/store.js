import { configureStore } from "@reduxjs/toolkit"

import {authReducer} from "../redux/reducer/authReducer"
import { jobReducer } from "./reducer/jobReducer"



const store = configureStore({
    reducer:{
        auth: authReducer,
        job: jobReducer
    }

})

export default store
