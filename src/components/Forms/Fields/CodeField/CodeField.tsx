import { Field } from 'formik';
import React from 'react';
import FormField from 'src/components/Forms/Field';

export type Props = {
	name?: string;
};

const CodeField: React.FC<Props> = () => {
	return (
		<>
			<Field
				testID='code'
				component={FormField}
				name='code'
				placeholder='Enter your code'
				keyboardType='numeric'
				textContentType='emailAddress'
				autofocus
			/>
		</>
	);
};

export default CodeField;
