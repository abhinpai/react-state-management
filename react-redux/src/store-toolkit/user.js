import { apiCallMade } from './apiActions';
const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (users, action) => {
      console.log(action);
      users.push(...action.payload);
    },
  },
});

export const loadUser = (param) => (dispatch, getState) => {
  return dispatch(
    apiCallMade({
      url: '/users',
      onSuccess: addUser.type
    })
  );
};

const { addUser } = slice.actions;
export default slice.reducer