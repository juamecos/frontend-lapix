import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { spacing } from '../../../theme/spacing';

const FormContainer = ({
	initialValues,
	onSubmit,
	validationSchema,
	children,
}: any) => {
	return (
		<View
			testID='form-container'
			style={{
				width: spacing.horizontal.huge,
			}}
		>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{() => <>{children}</>}
			</Formik>
		</View>
	);
};

export default FormContainer;
