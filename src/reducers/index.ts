import { IState } from "../types";

export function reducer(
  state: Partial<IState>,
  action: { type: string; payload?: unknown }
) {
  switch (action.type) {
    case "INCREMENT_PAGE": {
      return { ...state, currentPage: state.currentPage + 1 };
    }
    case "DECREMENT_PAGE": {
      return { ...state, currentPage: state.currentPage - 1 };
    }
    case "GO_FIRST_PAGE": {
      return { ...state, currentPage: 0 };
    }
    case "UPDATE_USER_DATA": {
      return {
        ...state,
        ...(action.payload as Object),
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export const initialState = {
  currentPage: 0,
  maxPage: 2,
};
