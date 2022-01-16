import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { getCharacters } from "../api/api";

const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";

export const charactersFromStore = (state) => state.characters;

export const fetchCharacters = () => {
  return (dispatch) => {
    getCharacters()
      .then(response => dispatch({ type: FETCH_CHARACTER_SUCCESS, data: response.results }))
  };
};

const initialState = {
  characters: [],
  currentCharacter: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: action.data,
      }

    default:
      return state;
  }
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
