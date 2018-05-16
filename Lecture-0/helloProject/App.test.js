import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  console.log(rendered)
  expect(rendered).toBeTruthy();
});

it('service type is food', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect( rendered.props.serviceType === 'food').toEqual(true)
});