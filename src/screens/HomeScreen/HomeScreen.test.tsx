/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import HomeScreen from './HomeScreen';
import { HomeScreenProps } from './HomeScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<HomeScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<HomeScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('HomeScreen');
  expect(element).toBeTruthy(); 
    
  });
});