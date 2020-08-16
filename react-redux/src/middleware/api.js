import axios from '';
import { apiCallMade, apiCallSuccess } from '../store-toolkit/apiActions';
const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallMade.type) return next(action);

  next(action);
  const { url, method, data, onSuccess } = action.payload;
  try {
    const response = await axios({
      baseURL: 'https://jsonplaceholder.typicode.com',
      url,
      data,
      method,
    });

    dispatch(apiCallSuccess(response.data));
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {}
};

export default api;
