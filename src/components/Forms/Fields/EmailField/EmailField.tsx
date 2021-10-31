import React from 'react';

import FormField from 'src/components/Forms/Field';
import { Field } from 'formik';

export type Props = {
	name?: string;
};

const EmailField: React.FC<Props> = () => {
	return (
		<>
			<Field
				testID='email'
				component={FormField}
				name='email'
				placeholder='E-mail'
				autoCompleteType='email'
				keyboardType='email-address'
				textContentType='emailAddress'
				autofocus
			/>
		</>
	);
};

export default EmailField;
