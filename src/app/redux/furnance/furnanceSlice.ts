import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../store";

const initialState = {
  status: "idle",
  furnances: [],
  numberOfSkeletons: 6,
} as FurnanceState;
interface FurnanceVM {
  furnances: Array<Furnance>;
}
interface FurnanceState {
  status: "idle" | "request" | "success" | "failure";
  furnances: Array<Furnance>;
  numberOfSkeletons: number | null;
}
export interface Furnance {
  id: number;
  name: string;
  sensors: Array<Sensor>;
}
export interface Sensor {
  name: string;
  status: string;
  img: string;
  data: Array<SensorData>;
}
export interface SensorData {
  date: string;
  value: number;
}
export const fetchFurnances = (): AppThunk => (dispatch) => {
  dispatch(loadFurnancesRequest());

  //odkomentuj gdy chcesz mieć stan success
  setTimeout(() => {
    dispatch(
      loadFurnancesSuccess({
        furnances: [
          {
            id: 1,
            name: "super piec",
            sensors: [
              {
                name: "Temperatura",
                status: "72 C",
                img:
                  "https://cdn.iconscout.com/icon/free/png-256/temperature-5-106113.png",
                data: [
                  { date: "12:00", value: 72 },
                  { date: "12:05", value: 80 },
                  { date: "12:10", value: 90 },
                  { date: "12:15", value: 90 },
                  { date: "12:20", value: 90 },
                  { date: "12:25", value: 91 },
                  { date: "12:30", value: 92 },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "Piec u Eli",
            sensors: [
              {
                name: "Temperatura",
                status: "73 C",
                img:
                  "https://cdn.iconscout.com/icon/free/png-256/temperature-5-106113.png",
                data: [
                  { date: "12:00", value: 72 },
                  { date: "12:05", value: 80 },
                  { date: "12:10", value: 90 },
                  { date: "12:15", value: 90 },
                  { date: "12:20", value: 90 },
                  { date: "12:25", value: 91 },
                  { date: "12:30", value: 92 },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "Piec na WIMII",
            sensors: [
              {
                name: "Temperatura",
                status: "12 C",
                img:
                  "https://cdn.iconscout.com/icon/free/png-256/temperature-5-106113.png",
                data: [
                  { date: "12:00", value: 72 },
                  { date: "12:05", value: 80 },
                  { date: "12:10", value: 90 },
                  { date: "12:15", value: 90 },
                  { date: "12:20", value: 90 },
                  { date: "12:25", value: 91 },
                  { date: "12:30", value: 92 },
                ],
              },
            ],
          },
        ],
      })
    );
  }, 2000);
  /*
   // odkomentuj gdy chcesz miec stan failure
  setTimeout(() => {
    dispatch(
      loadFurnancesSuccess({ furnances: [{ name: "super piec", sensors: [] }] })
    );
  }, 2000);
  */
};
const furnanceSlice = createSlice({
  name: "furnance",
  initialState,
  reducers: {
    loadFurnancesRequest: (state) => {
      state.furnances = [];
      state.numberOfSkeletons = 5;
      state.status = "request";
    },
    loadFurnancesSuccess: (state, action: PayloadAction<FurnanceVM>) => {
      state.status = "success";
      state.furnances = action.payload.furnances;
      state.numberOfSkeletons = null;
    },
    loadFurnancesFailure: (state) => {
      state.furnances = [];
      state.status = "failure";
      state.numberOfSkeletons = null;
    },
    setIdle: (state) => {
      state.status = "idle";
      state.furnances = [];
      state.numberOfSkeletons = null;
    },
  },
});
export const {
  loadFurnancesFailure,
  loadFurnancesSuccess,
  loadFurnancesRequest,
} = furnanceSlice.actions;

export const getFurnances = (state: RootState) => state.furnance.furnances;
export const getStatus = (state: RootState) => state.furnance.status;
export const getNumberOfSkeletons = (state: RootState) =>
  state.furnance.numberOfSkeletons;
export const getFurnanceById = (id: number) => (state: RootState) =>
  state.furnance.furnances.find((furnance) => furnance.id == id);
export default furnanceSlice.reducer;
