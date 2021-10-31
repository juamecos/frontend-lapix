/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import CodeField from './CodeField';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<CodeField />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<CodeField {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('CodeField');
  expect(element).toBeTruthy(); 
    
  });
});