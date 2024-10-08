import { useReducer } from "react";



type CounterState = {
    count: number
}

type CounterAction = {
    type: 'increment' | 'decrement'
    payload: number
}

//given an additional action with different payload
// type resetAction = {
//     type: 'increment' | 'decrement'
// }

// type UpfateAction = CounterAction | resetAction 

const initialState = {count: 0}

function reducer(state: CounterState, action: CounterAction): CounterState {
    if (!action || typeof action.type !== "string") {
      return state;
    }
  
    switch (action.type) {
      case "increment":
        if (typeof action.payload !== "number") {
          return state;
        }
        return { count: state.count + action.payload };
      case "decrement":
        if (typeof action.payload !== "number") {
          return state;
        }
        return { count: state.count - action.payload };
      default:
        return state;
    }
  }

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </div>
  );
};

export default Counter