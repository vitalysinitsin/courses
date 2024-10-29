import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_ADD = "add-value-to-add";

const reducer = (state, action) => {
  const { type, payload } = action;
  const { count, valueToAdd } = state;

  switch (type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: payload,
      };
    case ADD_VALUE_TO_ADD:
      return {
        ...state,
        count: count + valueToAdd,
        valueToAdd: 0,
      };
    default:
      throw new Error("Unexpected action type: ", type);
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_ADD,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count} </h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
