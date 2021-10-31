/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import AddStoneSteps from './AddStoneSteps';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<AddStoneSteps />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<AddStoneSteps {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('AddStoneSteps');
  expect(element).toBeTruthy(); 
    
  });
});