import React from 'react';
import { Field } from 'formik';
import FormField from 'src/components/Forms/Field';

export type Props = {
	name?: string;
};

const ConfirmPasswordField: React.FC<Props> = () => {
	return (
		<Field
			component={FormField}
			name='confirmPassword'
			placeholder='Confirm Password'
			secureTextEntry
			textContentType='password'
		/>
	);
};

export default ConfirmPasswordField;
