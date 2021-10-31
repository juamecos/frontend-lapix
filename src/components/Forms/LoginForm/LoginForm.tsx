import React from 'react';
import { Field } from 'formik';
import FormField from 'src/components/Forms/Field';
import SubmitButton from 'src/components/Forms/SubmitButton';
import FormContainer from 'src/components/Forms//FormContainer';
import { loginValidationSchema } from 'src/utils/ValidationSchema';
import { View } from 'react-native';
import { useSigninMutation } from '../../../generated/graphql';
// import { useToast } from 'react-native-toast-notifications';
import { storeData } from '../../../utils/Storage';

import { useAuth } from 'src/context/authContext/authContext';
import Loader from 'src/components/Loader';

interface IValues {
	email: string;
	password: string;
}

const initialValuesObject: IValues = {
	email: '',
	password: '',
};

const LoginForm = () => {
	const {
		status,
		token,
		signIn: singInAuth,
		signOut: signOutAuth,
		checkingAuth,
	} = useAuth();

	const [signIn, { data, loading, error }] = useSigninMutation({
		fetchPolicy: 'network-only',
		onCompleted: (result: any) => {
			singInAuth(result.signIn.token);
		},
	});
	return (
		<View testID='login-form'>
			<FormContainer
				testID='login-form-container'
				initialValues={initialValuesObject}
				validationSchema={loginValidationSchema}
				onSubmit={async (values: IValues, { resetForm }: any) => {
					checkingAuth();
					try {
						signIn({
							variables: {
								email: values.email,
								password: values.password,
							},
						});
						console.log('LoginForm OnSubmit result: ', data?.signIn?.status);

						if (error) {
							// return toast.show(error.message);
						}

						if (loading) {
							<Loader />;
						}

						if (!loading && !data?.signIn?.token) {
							signOutAuth();
							resetForm({ values: initialValuesObject });
						}
						if (!loading && data && data.signIn && data.signIn.token) {
							resetForm({ values: initialValuesObject });
							const token = data.signIn.token;
							singInAuth(token);
							await storeData('token', token);
						}
					} catch (err) {
						console.log(err);
					}
				}}
			>
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

				<Field
					component={FormField}
					placeholder='Password'
					name='password'
					secureTextEntry
					textContentType='password'
				/>
				<SubmitButton title='Submit' />
			</FormContainer>
		</View>
	);
};

export default LoginForm;
