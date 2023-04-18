import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./states/films/filmsSlice";

export default configureStore({
  reducer: {
    films: filmsSlice,
  },
});