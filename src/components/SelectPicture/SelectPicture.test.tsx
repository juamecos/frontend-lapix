/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import SelectPicture from './SelectPicture';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<SelectPicture />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<SelectPicture {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('SelectPicture');
  expect(element).toBeTruthy(); 
    
  });
});