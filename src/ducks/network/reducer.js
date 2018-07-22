import { handleActions } from 'redux-actions';
import { clearNetworkErrors, networkError } from './actions';
import { combineReducers } from 'redux';

const error = handleActions(
  {
    [clearNetworkErrors]: () => null,
    [networkError]: (_state, action) => action.payload
  },
  null
);

const message = handleActions(
  {
    [networkError]: (_state, action) => action.payload.response.data.message,
    [clearNetworkErrors]: () => null
  },
  null
);

export default combineReducers({
  error,
  message
});
