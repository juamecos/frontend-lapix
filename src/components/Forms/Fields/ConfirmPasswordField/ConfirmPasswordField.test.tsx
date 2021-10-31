/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import ConfirmPasswordField from './ConfirmPasswordField';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<ConfirmPasswordField />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<ConfirmPasswordField {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('ConfirmPasswordField');
  expect(element).toBeTruthy(); 
    
  });
});