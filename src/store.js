import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const initialState = {
};

export function reducer(state = initialState, action ) {
  // return Object.assign({}, state, {
  //         messages: action.payload
  //       });
  console.log("qqqq",action.type);
  
  switch (action.type) {
    case 'MESSAGES_LOADING_FULFILLED':
      return Object.assign({}, state, {
        messages: action.payload
      });
    case 'GET_MEMBERS_FULFILLED':
      return Object.assign({}, state, {
        members: action.payload
      });
    default:
      return state;
  }
}

export const store = createStore(reducer, {}, applyMiddleware(
  promiseMiddleware()
));