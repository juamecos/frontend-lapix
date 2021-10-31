/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import FormikContainer from './FormikContainer';

const createTestProps = (props: object) => ({
	...props,
});

describe('<FormikContainer />', () => {
	const props = createTestProps({});
	const { getByTestId } = render(<FormikContainer {...props} />);

	test('renders correctly', () => {
		getByTestId('formik-container-component');
	});
});
