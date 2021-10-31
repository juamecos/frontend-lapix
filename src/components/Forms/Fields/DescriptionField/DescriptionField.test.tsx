/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import DescriptionField from './DescriptionField';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<DescriptionField />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<DescriptionField {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('DescriptionField');
  expect(element).toBeTruthy(); 
    
  });
});