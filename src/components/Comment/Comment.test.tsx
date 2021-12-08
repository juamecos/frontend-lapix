/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Comment from './Comment';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<Comment />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<Comment {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('Comment');
  expect(element).toBeTruthy(); 
    
  });
});