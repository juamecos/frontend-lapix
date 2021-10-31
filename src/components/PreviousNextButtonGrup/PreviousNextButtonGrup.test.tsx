/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import PreviousNextButtonGrup from './PreviousNextButtonGrup';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<PreviousNextButtonGrup />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<PreviousNextButtonGrup {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('PreviousNextButtonGrup');
  expect(element).toBeTruthy(); 
    
  });
});