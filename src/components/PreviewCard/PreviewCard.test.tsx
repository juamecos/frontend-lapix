/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import PreviewCard from './PreviewCard';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<PreviewCard />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<PreviewCard {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('PreviewCard');
  expect(element).toBeTruthy(); 
    
  });
});