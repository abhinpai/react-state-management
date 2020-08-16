import { configureStore } from '@reduxjs/toolkit';
import reducer from './theme';

export default function () {
  return configureStore({
    reducer
  });
}
