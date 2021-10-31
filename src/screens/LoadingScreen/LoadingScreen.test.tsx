/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import LoadingScreen from './LoadingScreen';
import { LoadingScreenProps } from './LoadingScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<LoadingScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<LoadingScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('LoadingScreen');
  expect(element).toBeTruthy(); 
    
  });
});