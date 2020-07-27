import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "src/Components/rootReducer";

export const store = configureStore({ reducer: rootReducer });
