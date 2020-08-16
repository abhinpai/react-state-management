import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const toggleTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
      payload: {
        theme: !isDarkTheme,
      },
    });
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
      <div onClick={toggleTheme}>Toggle Theme</div>
    </div>
  );
}

export default App;
