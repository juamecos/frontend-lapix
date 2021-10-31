/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import BackArrow from './BackArrow';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<BackArrow />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<BackArrow {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('BackArrow');
  expect(element).toBeTruthy(); 
    
  });
});