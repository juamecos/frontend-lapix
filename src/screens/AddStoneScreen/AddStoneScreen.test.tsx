/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import AddStoneScreen from './AddStoneScreen';
import { AddStoneScreenProps } from './AddStoneScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<AddStoneScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<AddStoneScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('AddStoneScreen');
  expect(element).toBeTruthy(); 
    
  });
});