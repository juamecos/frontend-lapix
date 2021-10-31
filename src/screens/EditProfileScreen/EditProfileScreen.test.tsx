/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import EditProfileScreen from './EditProfileScreen';
import { EditProfileScreenProps } from './EditProfileScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<EditProfileScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<EditProfileScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('EditProfileScreen');
  expect(element).toBeTruthy(); 
    
  });
});