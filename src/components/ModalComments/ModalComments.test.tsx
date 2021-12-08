/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import ModalComments from './ModalComments';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<ModalComments />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<ModalComments {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('ModalComments');
  expect(element).toBeTruthy(); 
    
  });
});