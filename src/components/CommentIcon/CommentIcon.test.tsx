/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import CommentIcon from './CommentIcon';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<CommentIcon />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<CommentIcon {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('CommentIcon');
  expect(element).toBeTruthy(); 
    
  });
});