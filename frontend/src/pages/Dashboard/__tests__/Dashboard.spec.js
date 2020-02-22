import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import sagaMiddleware from 'redux-saga';
import configureMockStore from 'redux-mock-store';

import Dashboard from '..';
import { constants } from '../../../utils';

const {
  dashboard, AVERAGE_ISSUE, AVERAGE_MERGE, AVERAGE_PULL, MONTH_SUMARY,
} = constants;
const mockStore = configureMockStore([sagaMiddleware]);


describe('Home', () => {
  test('should render with success', () => {
    const titles = [AVERAGE_ISSUE, AVERAGE_MERGE, AVERAGE_PULL, MONTH_SUMARY];
    const store = mockStore({
      github: {
        dashboard,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );

    titles.forEach((title) => expect(wrapper.find('div.card-title').contains(title)).toBeTruthy());
    expect(wrapper).toMatchSnapshot();
  });
});
