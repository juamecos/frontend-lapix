import React from 'react';
import { Field } from 'formik';
import FormField from 'src/components/Forms/Field';
import SubmitButton from 'src/components/Forms/SubmitButton';
import FormContainer from 'src/components/Forms//FormContainer';
import { signUpValidationSchema } from 'src/utils/ValidationSchema';
import { View } from 'react-native';
import {
	NavigationHelpersContext,
	useNavigation,
} from '@react-navigation/native';
// import { useToast } from 'react-native-toast-notifications';
import { useSignUpMutation } from 'src/generated/graphql';
import Text from 'src/components/Text';

interface IValues {
	userName: string;
	email: string;
	password: string;
	confirmPassword?: string;
}

const SignUpForm = () => {
	const navigation = useNavigation();
	// const toast = useToast();
	const [signUp, { data, loading, error }] = useSignUpMutation();
	return (
		<View testID='sign-up-form'>
			<FormContainer
				initialValues={{
					userName: '',
					email: '',
					password: '',
					confirmPassword: '',
				}}
				validationSchema={signUpValidationSchema}
				onSubmit={async (values: IValues, { resetForm }) => {
					try {
						const resp = await signUp({
							variables: {
								user: {
									userName: values.userName,
									email: values.email,
									password: values.password,
								},
							},
						});
						if (resp.data?.signup?.user === null) {
							// toast.show(resp.data.signup.message, {
							// 	type: 'warning',
							// });
						}
						if (!loading && resp.data?.signup?.user) {
							// toast.show(resp.data.signup.message);
							setTimeout(() => {
								navigation.navigate('LoginScreen');
								resetForm({ values: '' });
							}, 3000);
						}
					} catch (err) {
						// toast.show(err.msg);
					}
				}}
			>
				<Field
					component={FormField}
					name='userName'
					placeholder='Username'
					autofocus
				/>
				<Field
					component={FormField}
					name='email'
					placeholder='E-mail'
					autoCompleteType='email'
					keyboardType='email-address'
					textContentType='emailAddress'
				/>
				<Field
					component={FormField}
					name='password'
					placeholder='Password'
					secureTextEntry
					textContentType='password'
				/>
				<Field
					component={FormField}
					name='confirmPassword'
					placeholder='Confirm Password'
					secureTextEntry
					textContentType='password'
				/>
				{/* {error && toast.show(error.message)} */}
				{loading ? <Text h5 title={'loading'} /> : null}
				<SubmitButton title='Submit' />
			</FormContainer>
		</View>
	);
};

export default SignUpForm;
