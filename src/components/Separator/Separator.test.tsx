/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Separator from './Separator';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Separator />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Separator {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Separator');
  expect(element).toBeTruthy(); 
    
  });
});