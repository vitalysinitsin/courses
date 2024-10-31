import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addCar: (state, action) => {
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar: (state, action) => {
      const updated = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updated;
    },
  },
});

export const carsReducer = carSlice.reducer;
export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
