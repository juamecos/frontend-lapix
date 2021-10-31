import React, { FC, useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import style from './LoginScreenStyle';
import { LoginScreenProps } from './LoginScreenProps';

import Text from 'src/components/Text';
import LoginForm from 'src/components/Forms/LoginForm';
import CustomButton from 'src/components/CustomButton';
import { color, spacing } from 'src/theme';
import { useAuth } from 'src/context/authContext/authContext';
import Loader from 'src/components/Loader';

/**
 * Screen component description
 *
 * @returns Screen
 */

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
	const { token, status } = useAuth();

	// Context

	// Custom hooks

	// Internal state

	useEffect(() => {}, []);
	useEffect(() => {
		status === 'Unauthenticated' && <Loader />;
		console.log('Login Screen status: ', status);
	}, [status]);

	// Component JSX
	return (
		<>
			{status === 'Checking' ? (
				<Loader />
			) : (
				<SafeAreaView style={style.screenWrapper} testID='LoginScreen'>
					<Text h1 title='Login' style={style.title} />
					<Text p title='Log in to track and share your painted stones.' />
					<LoginForm />
					<View style={style.buttonGroup}>
						<CustomButton
							textButton
							small
							title='Create an account'
							onPress={() => navigation?.navigate('SignUpScreen')}
							styleText={{ color: color.secondary }}
							styleBtn={{ marginTop: spacing.vertical.micro }}
						/>
						<CustomButton
							textButton
							small
							title='Forgot your password?'
							onPress={() => navigation?.navigate('ForgotScreen')}
							styleText={{ color: color.dim }}
							styleBtn={{ marginTop: spacing.vertical.tiny }}
						/>
					</View>
				</SafeAreaView>
			)}
		</>
	);
};

export default LoginScreen;
