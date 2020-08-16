import { createAction } from '@reduxjs/toolkit';

// The common action for the api request 
export const apiCallMade = createAction('api/callMade');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');
