import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "./redux/user/userSlice";
import furnanceReducer from "./redux/furnance/furnanceSlice";
import appSettingsReducer from "./redux/appSettings/appSettingsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    furnance: furnanceReducer,
    appSettings:appSettingsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
