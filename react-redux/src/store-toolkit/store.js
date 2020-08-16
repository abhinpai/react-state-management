import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducer';
import customLogger from '../middleware/customLogger';
import api from '../middleware/api';

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      // logger,
      customLogger({ description: 'sample description' }), api
    ],
  });
}
