import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    list: [],
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addCar: (state, action) => {
      state.list.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar: (state, action) => {
      const updated = state.list.filter((car) => car.id !== action.payload);
      state.list = updated;
    },
  },
});

export const carsReducer = carSlice.reducer;
export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
