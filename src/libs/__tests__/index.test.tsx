import React from 'react';
import renderer from 'react-test-renderer';
import { VlagProvider } from '../context';

it('success: vlag provider renders correctly', () => {
  const vlag = (
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
      content
    </VlagProvider>
  );

  const tree = renderer.create(vlag);
  expect(tree).toMatchSnapshot();
});

it('error: vlag provider renders fails if flags id same', () => {
  const vlag = (
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
          id: 'new_checkout_page',
          name: 'Checkout Page',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
          disabled: false
        }
      ]}
    >
      content
    </VlagProvider>
  );

  const tree = renderer.create(vlag);
  expect(tree).toMatchSnapshot();
});
