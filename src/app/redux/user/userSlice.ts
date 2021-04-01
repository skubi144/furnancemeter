import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../store";

type User = {
  id: number;
  fullname: string;
  password: string;
  email: string;
};

interface UserVM {
  token: string | null;
  hubId: string | null;
  user: User | null;
}
interface UserState {
  status: "idle" | "request" | "success" | "failure";
  token: string | null;
  hubId: string | null;
  user: User | null;
}

const initialState = {
  status: "idle",
  token: null,
  hubId: null,
  user: null,
} as UserState;
export const fetchUser = (data: LoginProps): AppThunk => (dispatch) => {
  dispatch(loginRequest());
  console.log(data);
  /*
  In future here will be try catch statement
  */
  setTimeout(() => {
    dispatch(
      loginSuccess({
        token: "XD",
        hubId: "X2",
        user: { id: 1, fullname: "M", password: "pwd", email: "m@m.com" },
      })
    );
  }, 2000);
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.hubId = null;
      state.token = null;
      state.user = null;
    },
    loginRequest: (state) => {
      state.status = "request";
      state.token = null;
      state.hubId = null;
      state.user = null;
    },
    loginSuccess: (state, action: PayloadAction<UserVM>) => {
      const { token, hubId, user } = action.payload;
      state.status = "success";
      state.hubId = hubId;
      state.token = token;
      state.user = user;
    },
    loginFailure: (state) => {
      state.status = "failure";
      state.token = null;
      state.hubId = null;
      state.user = null;
    },
  },
});

export const {
  loginFailure,
  loginSuccess,
  loginRequest,
  logout,
} = userSlice.actions;
export const getUser = (state: RootState) => state.user;
export const getToken = (state: RootState) => state.user.token;
export const getHubId = (state: RootState) => state.user.hubId;
export const getLoginFetchStatus = (state: RootState) => state.user.status;
export default userSlice.reducer;
