import React, { useState } from 'react';

import SubmitButton from 'src/components/Forms/SubmitButton';
import FormContainer from 'src/components/Forms//FormContainer';
import {
	stepOneValidationSchema,
	stepThreeValidationSchema,
	stepTwoValidationSchema,
} from 'src/utils/ValidationSchema';
import { View } from 'react-native';
import { ForgotData } from './ForgotFormProps';

import CustomButton from 'src/components/CustomButton';
import EmailField from '../Fields/EmailField';
import CodeField from '../Fields/CodeField';
import PasswordField from '../Fields/PasswordField';
import ConfirmPasswordField from '../Fields/ConfirmPasswordField/ConfirmPasswordField';
import Props from './ForgotFormProps';
import { useResetPasswordEmailMutation } from '../../../generated/graphql';

export enum Step {
	one = 0, // User fills in the email
	two = 1, // User fills in the code received by email
	three = 2, // User fills in the password and confirms it
}

const initialValues = {
	email: '',
	code: '',
	password: '',
	confirmPassword: '',
};

const ForgotForm = ({ currentStep, setCurrentStep }: Props) => {
	const [, setData] = useState<ForgotData>(initialValues);
	const [resetPasswordEmail, { data, loading, error }] =
		useResetPasswordEmailMutation({
			fetchPolicy: 'network-only',
		});

	const makeRequest = (formData: ForgotData) => {
		console.log('Form Submitted', formData);
	};

	const handleNextStep = (newData: ForgotData, final = false) => {
		setData(prev => ({ ...prev, ...newData }));

		if (final) {
			makeRequest(newData);
			return;
		}

		setCurrentStep((prev: Step) => prev + 1);
	};

	const handlePrevStep = (newData: ForgotData) => {
		setData(prev => ({ ...prev, ...newData }));
		setCurrentStep((prev: Step) => prev - 1);
	};

	return (
		<View testID='forgot-form'>
			<FormContainer
				testID='login-form-container'
				initialValues={initialValues}
				validationSchema={() => stepValidationSchemaController(currentStep)}
				onSubmit={(values: any) =>
					stepOnSubmitController(values, currentStep, handleNextStep)
				}
			>
				{stepFieldController(currentStep)}

				<SubmitButton title='Submit' />
				{currentStep > 0 && (
					<CustomButton
						secondary
						medium
						rounded
						title='BACK'
						onPress={() => handlePrevStep()}
					/>
				)}
			</FormContainer>
		</View>
	);
};

const stepValidationSchemaController = (currentStep: Step) => {
	switch (currentStep) {
		case Step.one:
			return stepOneValidationSchema;

		case Step.two:
			return stepTwoValidationSchema;

		case Step.three:
			return stepThreeValidationSchema; // TODO no se ve en el step 3

		default:
			break;
	}
};

const stepOnSubmitController = async (
	values: ForgotData,
	currentStep: Step,
	cb: (newData: ForgotData, final: boolean) => void
) => {
	switch (currentStep) {
		case Step.one:
			return cb(values, false);

		case Step.two:
			return cb(values, false);

		case Step.three:
			return cb(values, true);

		default:
			break;
	}
};

const stepFieldController = (currentStep: Step) => {
	switch (currentStep) {
		case Step.one:
			return <EmailField />;
		case Step.two:
			return <CodeField />;
		case Step.three:
			return (
				<>
					<PasswordField />
					<ConfirmPasswordField />
				</>
			);

		default:
			break;
	}
};

export default ForgotForm;
