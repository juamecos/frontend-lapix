/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Published from './Published';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Published />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Published {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Published');
  expect(element).toBeTruthy(); 
    
  });
});