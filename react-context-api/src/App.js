import React from 'react';
import './App.css';
import { useDataLayer } from './context/DataLayer';

function App() {
  const [{ isDarkTheme }, dispatch] = useDataLayer();
  console.log(isDarkTheme);

  const toggleTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
      payload: {
        theme: !isDarkTheme,
      },
    });
  };

  const getStyle = () => {
    return isDarkTheme ? 'App dark' : 'App'
  };

  return (
    <div className={getStyle()}>
      <span className='emojie' role='img'>
        {' '}
        👻
      </span>
      <div onClick={toggleTheme}>Toggle Theme</div>
    </div>
  );
}

export default App;
