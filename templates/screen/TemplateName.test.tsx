/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import TemplateName from './TemplateName';
import { TemplateNameProps } from './TemplateNameProps';


const createTestProps = (props: object) => ({
  ...props,
});


describe('<TemplateName />', () => {
  const props = createTestProps({});
  const { getByTestId } = render(<TemplateName {...props}/>);

  test('renders correctly', () => {
  const element = getByTestId('TemplateName');
  expect(element).toBeTruthy(); 
    
  });
});