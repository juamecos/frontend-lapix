/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import FindScreen from './FindScreen';
import { FindScreenProps } from './FindScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<FindScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<FindScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('FindScreen');
  expect(element).toBeTruthy(); 
    
  });
});