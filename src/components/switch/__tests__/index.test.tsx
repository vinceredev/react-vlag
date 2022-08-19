import React from 'react';
import renderer from 'react-test-renderer';
import Switch from '../index';

it('success: renders correctly', () => {
  const tree = renderer.create(<Switch />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('success: renders checked true correctly', () => {
  const tree = renderer.create(<Switch checked={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('success: renders disabled true correctly', () => {
  const tree = renderer.create(<Switch disabled={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
