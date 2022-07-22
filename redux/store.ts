import { configureStore } from "@reduxjs/toolkit";
import tokens from "./tokens/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({ reducer: { tokens } });

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
