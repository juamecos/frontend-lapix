/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import ProfileScreen from './ProfileScreen';
import { ProfileScreenProps } from './ProfileScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<ProfileScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<ProfileScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('ProfileScreen');
  expect(element).toBeTruthy(); 
    
  });
});