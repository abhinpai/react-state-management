import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toogleTheme } from './store-toolkit/theme';
import { loadUser } from './store-toolkit/user';

function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  // Dispatch Using plaing OLD school Redux technique
  const toggleTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
      payload: {
        theme: !isDarkTheme,
      },
    });
  };

  // Clean and concise code to dispatch action using redux/toolkit
  const toogleThemeUsingTookit = () => {
    dispatch(loadUser());
    dispatch(toogleTheme({ theme: !isDarkTheme }));
  };

  const getStyle = () => {
    return isDarkTheme ? 'App dark' : 'App';
  };

  return (
    <div className={getStyle()}>
      <h1>React - Redux</h1>
      <span className='emojie' role='img'>
        {' '}
        👻
      </span>
      <div onClick={toogleThemeUsingTookit}>Toggle Theme</div>
    </div>
  );
}

export default App;
