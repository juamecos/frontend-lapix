/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import SingleStone from './SingleStone';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<SingleStone />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<SingleStone {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('SingleStone');
  expect(element).toBeTruthy(); 
    
  });
});