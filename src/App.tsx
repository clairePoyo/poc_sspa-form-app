import { useReducer } from "react";
import Step from "./components/Step";
import { reducer, initialState } from "./reducers";
import { IState, IApp, TStep } from "./types";

import FinalStep from "./components/FinalStep";

const STEPS_CONFIG: Array<TStep> = [
  [
    {
      id: 1,
      label: "Firstname",
      name: "firstname",
      rules: { required: true },
    },
    {
      id: 2,
      label: "Lastname",
      name: "lastname",
      rules: { required: true },
    },
  ],
  [
    {
      id: 3,
      label: "Birthday",
      name: "birthday_date",
      rules: { required: true },
    },
    {
      id: 4,
      label: "Favorite animal",
      name: "favoriteAnimal",
      rules: { required: true },
    },
  ],
];

export default function App(props: IApp) {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...props });

  return (
    <>
      {state.currentPage < state.maxPage ? (
        <Step
          config={STEPS_CONFIG[state.currentPage]}
          dispatch={dispatch}
          state={state as IState}
        />
      ) : (
        <FinalStep
          state={state}
          goBack={() => dispatch({ type: "GO_FIRST_PAGE" })}
        />
      )}
    </>
  );
}
