/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Avatar from './Avatar';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Avatar />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Avatar {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Avatar');
  expect(element).toBeTruthy(); 
    
  });
});