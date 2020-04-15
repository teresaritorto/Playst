import React from 'react';
import App from './App';
import { Box } from './components/Box'
import { shallow } from 'enzyme';

it('renders boxes without crashing', () => {
  shallow(<App />)
});

it('renders 5 boxes', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Box).length).toBe(5)
});

it('should pass props to box', () => {
  const wrapper = shallow(<App />)
  const boxes = wrapper.find(Box)
  boxes.forEach(box => {
    expect(box.props().className).not.toBeNull()
    expect(box.props().value).not.toBeNull()
  });
});
