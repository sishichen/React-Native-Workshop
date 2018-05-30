import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('onAddItemTextChanged change state addItemTextInputValue', () => {
  const rendered = renderer.create(<App />);
  const instance = rendered.getInstance();
  instance.setState = jest.fn();

  instance.onAddItemTextChanged(3);

  expect(instance.setState).toBeCalledWith({
    addItemTextInputValue: 3
  });
});
