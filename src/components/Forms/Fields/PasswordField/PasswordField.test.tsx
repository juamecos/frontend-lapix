/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import PasswordField from './PasswordField';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<PasswordField />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<PasswordField {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('PasswordField');
  expect(element).toBeTruthy(); 
    
  });
});