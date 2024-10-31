import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: { list, searchTerm } }) =>
    list.filter((car) => car.name.toLowerCase().includes(searchTerm))
  );
  const handleCarDelete = (carId) => {
    dispatch(removeCar(carId));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
