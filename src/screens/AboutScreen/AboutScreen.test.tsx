/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import AboutScreen from './AboutScreen';
import { AboutScreenProps } from './AboutScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<AboutScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<AboutScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('AboutScreen');
  expect(element).toBeTruthy(); 
    
  });
});