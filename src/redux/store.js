import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { getCharacters } from "../api/api";

const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
const CHANGE_CHARACTER_LIKE = "CHANGE_CHARACTER_LIKE";

export const charactersFromStore = (state) => state.characters;

export const fetchCharacters = () => {
  return (dispatch) => {
    getCharacters()
      .then(response => {
        const correctResponse = response.results.map(item => ({
          ...item,
          like: false,
        }));

        return dispatch({ type: FETCH_CHARACTER_SUCCESS, data: correctResponse })
      })
  };
};

export const changeFieldLike = (id) => {
  return {
    type: CHANGE_CHARACTER_LIKE,
    id,
  }
}

const initialState = {
  characters: [],
  characterId: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: action.data,
      }

    case CHANGE_CHARACTER_LIKE:
      return {
        ...state,
        characters: state.characters.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              like: !item.like,
            }
          }

          return item;
        })
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
