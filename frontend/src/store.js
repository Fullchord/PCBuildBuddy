import { configureStore } from "@reduxjs/toolkit";

import componentsReducer from "../redux/componentSlice";

const store = configureStore({
    reducer: {
        components: componentsReducer
    },
});

export default store;