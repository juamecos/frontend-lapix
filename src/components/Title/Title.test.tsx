/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Title from './Title';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Title />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Title {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Title');
  expect(element).toBeTruthy(); 
    
  });
});