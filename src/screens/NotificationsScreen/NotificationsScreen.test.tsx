/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import NotificationsScreen from './NotificationsScreen';
import { NotificationsScreenProps } from './NotificationsScreenProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<NotificationsScreen />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<NotificationsScreen {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('NotificationsScreen');
  expect(element).toBeTruthy(); 
    
  });
});