import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/cryptoApi";
import { cryptoNewsApi } from "../Services/cryptoNewsApi";
import {cryptoApiDetails} from '../Services/cryptoApiDetails';
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
       [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
       [cryptoApiDetails.reducerPath]:cryptoApiDetails.reducer,
    },
        middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cryptoApi.middleware,cryptoNewsApi.middleware,cryptoApiDetails.middleware)

});