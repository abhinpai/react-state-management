import { TOGGLE_THEME } from './actionsType';

export const initialState = {
  isDarkTheme: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: action.payload.theme,
      };

    default:
      return state;
  }
};

export default reducer;
