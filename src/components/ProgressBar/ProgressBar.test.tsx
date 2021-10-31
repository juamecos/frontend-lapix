/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import ProgressBar from './ProgressBar';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<ProgressBar />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<ProgressBar {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('ProgressBar');
  expect(element).toBeTruthy(); 
    
  });
});