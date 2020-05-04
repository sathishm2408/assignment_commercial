import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
import {App} from './App';
import { getChatLog, getMembersDetails } from './service';

it('should render without crashing', () => {
  let wrapper;
  let initialState = {
    message: null,
    members: null
  };

  const store = mockStore(initialState);
  wrapper = shallow(<Provider store={store}>
    <App />
  </Provider>)
});
