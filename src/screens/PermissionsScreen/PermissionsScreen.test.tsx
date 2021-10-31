/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import PermissionsScreen from './PermissionsScreen';
import { PermissionsScreenProps } from './PermissionsScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<PermissionsScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<PermissionsScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('PermissionsScreen');
  expect(element).toBeTruthy(); 
    
  });
});