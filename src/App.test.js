import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
import  ConnectedApp, {App} from './App';
import messages from './messages.json';
import members from './members.json';

it('should render App component without crashing', () => {
  let wrapper;
  let initialState = {
    message: null,
    members: null
  };

  let props={
    getChatLog : jest.fn(() => {}),
    getMembersDetails : jest.fn(() =>{}),
    // getChatLog : jest.fn(() => messages),
    // getMembersDetails : jest.fn(() => members),
    // message: messages,
    // members: members
  }

  const store = mockStore(initialState);
  wrapper = shallow(<Provider store={store}>
    <App {...props} />
  </Provider>)

  
});

// it('should have Message-div',()=>{
//   // expect(wrapper.find('h1')).toBe(true)
//   // expect(wrapper.find('h1').text()).toBe('Chat Room')
//   // expect(wrapper.find('h1').hasClass('App-header')).toBe(true)
//   //const fn = jest.fn()
//  // expect(fn).toHaveBeenCalled()
//  // expect(wrapper.find('h4').length).toBe(50)
//   expect(wrapper.find('App').hasClass('Message-div')).toBe(50)
//  // expect(wrapper.find('App').hasClass('Message-div')).toEqual(true)
// })