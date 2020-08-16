export const initialState = {
  isDarkTheme: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkTheme: action.payload.theme,
      };
  }
};

export default reducer;
