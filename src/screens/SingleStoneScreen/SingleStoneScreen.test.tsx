/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import SingleStoneScreen from './SingleStoneScreen';
import { SingleStoneScreenProps } from './SingleStoneScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<SingleStoneScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<SingleStoneScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('SingleStoneScreen');
  expect(element).toBeTruthy(); 
    
  });
});