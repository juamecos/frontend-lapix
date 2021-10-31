/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Card from './Card';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Card />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Card {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Card');
  expect(element).toBeTruthy(); 
    
  });
});