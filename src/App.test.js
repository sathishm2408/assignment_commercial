import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
import ConnectedApp, { App } from './App';
import messages from './messages.json';
import members from './members.json';

describe('App Component', () => {
  let wrapper;
  let initialState = {
    message: null,
    members: null
  };

  let props = {
    getChatLog: jest.fn(() => { }),
    getMembersDetails: jest.fn(() => { }),
    // getChatLog : jest.fn(() => messages),
    // getMembersDetails : jest.fn(() => members),
    message: messages,
    members: members
  }

  const store = mockStore(initialState);

  beforeEach(()=>{
    wrapper = shallow(
      <App {...props} />)
});

afterEach(()=>{
    wrapper.unmount();
});

it('should render App component without crashing',()=>{
  expect(wrapper.exists()).toBe(true);
})

it('should have the same snapshot',()=>{
  expect(toJSON(wrapper)).toMatchSnapshot();
})

it('should call the getChatLog methods',()=>{
  expect(props.getChatLog.mock.calls.length).toBe(3)
})

it('should have App-header component with title Chat Room',()=>{
  expect(wrapper.find('h1').hasClass('App-header')).toBe(true)
  expect(wrapper.find('h1').text()).toBe('Chat Room');
})

it('should render with given state and props', () => {
  expect(wrapper.state().message).toHaveLength(100);
});

it('should call userDetails method', () => {
  const instance = wrapper.instance();
  const member = [{
    "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
    "firstName": "Albert",
    "lastName": "Rose",
    "email": "arosec@bbb.org",
    "avatar": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
    "ip": "20.79.231.223"
  }]

  expect(instance.userDetails("fe27b760-a915-475c-80bb-7cdf14cc6ef3")).toStrictEqual(member)
})

});

// it('should have Message-div',()=>{
//   //const fn = jest.fn()
//  // expect(fn).toHaveBeenCalled()
//  // expect(wrapper.find('h4').length).toBe(50)
// })


// const thunk = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState)
//   }

//   return next(action)
// }

// const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: jest.fn()
//   }
//   const next = jest.fn()

//   const invoke = action => thunk(store)(next)(action)

//   return { store, next, invoke }
// }

// it('passes through non-function action', () => {
//   const { next, invoke } = create()
//   const action = { type: 'TEST' }
//   invoke(action)
//   expect(next).toHaveBeenCalledWith(action)
// })