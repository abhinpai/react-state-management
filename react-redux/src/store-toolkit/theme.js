// Clean and concise code for actiontype, actiontype creator and reducer using createAction and createReducer
// We can also replace createSlice for both createAction and createReducer
import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import reducer from '../store/reducer';

console.log("This is optimized implementation");
const initialState = {
  isDarkTheme: true,
};

// export const toogleTheme = createAction('TOGGLE_THEME');

// export default createReducer(initialState, {
//   [toogleTheme.type]: (themes, action) => {
//     themes.isDarkTheme = action.payload.theme;
//   },
// });

// Replacement of createAction and createReducer using createSlice which can redue the number of lines of codes drastically
const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toogleTheme: (themes, action) => {
      themes.isDarkTheme = action.payload.theme;
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;
