/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import CustomTabBarButton from './CustomTabBarButton';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<CustomTabBarButton />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<CustomTabBarButton {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('CustomTabBarButton');
  expect(element).toBeTruthy(); 
    
  });
});