import React from 'react';
import renderer from 'react-test-renderer';
import Features from '../index';
import { VlagProvider } from '../../../libs/context';

it('success: vlag features renders correctly', () => {
  const vlags = (
    <VlagProvider
      flags={[
        {
          id: 'new_checkout_page',
          name: 'Checkout Page',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
          helperText: 'Will be available for beta testing end of 2022',
          disabled: false
        },
        {
          id: 'new_product_page',
          name: 'Product Page',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
          disabled: false
        }
      ]}
    >
      <Features />
    </VlagProvider>
  );

  const trees = renderer.create(vlags);
  expect(trees).toMatchSnapshot();
});
