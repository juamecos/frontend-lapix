/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Modal from './Modal';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Modal />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Modal {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Modal');
  expect(element).toBeTruthy(); 
    
  });
});