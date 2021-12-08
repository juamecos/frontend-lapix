/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import ModalSingleStone from './ModalSingleStone';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<ModalSingleStone />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<ModalSingleStone {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('ModalSingleStone');
  expect(element).toBeTruthy(); 
    
  });
});