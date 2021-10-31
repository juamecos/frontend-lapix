import React from 'react';
import FormField from 'src/components/Forms/Field';
import { Field } from 'formik';

export type Props = {
	name?: string;
};

const PasswordField: React.FC<Props> = () => {
	return (
		<>
			<Field
				component={FormField}
				name='password'
				placeholder='Password'
				secureTextEntry
				textContentType='password'
			/>
		</>
	);
};

export default PasswordField;
