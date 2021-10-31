/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import StepNavigation from './StepNavigation';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<StepNavigation />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<StepNavigation {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('StepNavigation');
  expect(element).toBeTruthy(); 
    
  });
});