import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ form, cars: { list, searchTerm } }) => ({
      cars: list.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
      name: form.name,
    })
  );
  const handleCarDelete = (carId) => {
    dispatch(removeCar(carId));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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
