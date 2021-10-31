import React from 'react';
import { View, Text } from 'react-native';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import styles from './FormikContainerStyle';
import Button from '../CustomButton';

export type Props = {
	initialValues: object;
	validationSchema: Yup.ObjectSchema<any, any, any, any>;
	onSubmit: (values: any) => void; // TODO Check the types of the onSubmit vButton
	children: JSX.Element | JSX.Element[];
};

const FormikContainer: React.FC<Props> = ({
	// TODO check more props like onHandleChange, etc
	initialValues,
	validationSchema,
	onSubmit,
	children,
}) => {
	return (
		<View testID='formik-container-component'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ handleChange, handleBlur, handleSubmit, values }) => children}
			</Formik>
		</View>
	);
};

export default FormikContainer;
