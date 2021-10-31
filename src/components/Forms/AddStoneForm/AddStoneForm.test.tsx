/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import AddStoneForm from './AddStoneForm';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<AddStoneForm />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<AddStoneForm {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('AddStoneForm');
  expect(element).toBeTruthy(); 
    
  });
});