/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import LikeIcon from './LikeIcon';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<LikeIcon />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<LikeIcon {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('LikeIcon');
  expect(element).toBeTruthy(); 
    
  });
});