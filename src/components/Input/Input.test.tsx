/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Input from './Input';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Input />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Input {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Input');
  expect(element).toBeTruthy(); 
    
  });
});