/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import MapComponent from './MapComponent';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<MapComponent />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<MapComponent {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('MapComponent');
  expect(element).toBeTruthy(); 
    
  });
});