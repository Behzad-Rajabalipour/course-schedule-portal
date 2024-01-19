import { configureStore } from "@reduxjs/toolkit";
import studentsApi from "./services/studentsApi";
import professorsApi from "./services/professorsApi";
import coursesApi from "./services/coursesApi";
import selectUnitsApi from "./services/selectunitsApi";
import selectUnitCounterSlice from "./selectUnitCounterSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Combine reducers and API slices
    [studentsApi.reducerPath]: studentsApi.reducer,
    [professorsApi.reducerPath]: professorsApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [selectUnitsApi.reducerPath]: selectUnitsApi.reducer,
    selectunit: selectUnitCounterSlice, // Add custom slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      studentsApi.middleware,
      professorsApi.middleware,
      coursesApi.middleware,
      selectUnitsApi.middleware
    ),
});

export default store;
