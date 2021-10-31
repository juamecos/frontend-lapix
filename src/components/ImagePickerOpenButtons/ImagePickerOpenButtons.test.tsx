/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import ImagePickerOpenButtons from './ImagePickerOpenButtons';



const createTestProps = (props: object) => ({
  ...props,
});


describe('<ImagePickerOpenButtons />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<ImagePickerOpenButtons {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('ImagePickerOpenButtons');
  expect(element).toBeTruthy(); 
    
  });
});