import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import reducer from './theme';

export default function () {
  return configureStore({
    reducer,
    middleware: [logger]
  });
}
