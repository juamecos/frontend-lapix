/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Step from './Step';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Step />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Step {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Step');
  expect(element).toBeTruthy(); 
    
  });
});