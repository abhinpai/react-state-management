export const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = (currentTheme) => ({
  type: TOGGLE_THEME,
  payload: {
    isDarkTheme: !currentTheme,
  },
});
