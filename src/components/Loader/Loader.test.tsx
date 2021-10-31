/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Loader from './Loader';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Loader />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Loader {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Loader');
  expect(element).toBeTruthy(); 
    
  });
});