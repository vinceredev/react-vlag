import React from 'react';
import renderer from 'react-test-renderer';
import Vlag from '../index';

it('success: renders correctly', () => {
  const tree = renderer
    .create(
      <Vlag name="checkout_page">
        {(isActive) => (isActive ? <>beta checkout</> : <>release checkout</>)}
      </Vlag>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
