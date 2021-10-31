/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import EmailField from './EmailField';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<EmailField />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<EmailField {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('EmailField');
  expect(element).toBeTruthy(); 
    
  });
});