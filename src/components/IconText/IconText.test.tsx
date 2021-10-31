/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import IconText from './IconText';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<IconText />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<IconText {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('IconText');
  expect(element).toBeTruthy(); 
    
  });
});