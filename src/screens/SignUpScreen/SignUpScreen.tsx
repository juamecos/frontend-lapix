import React, { FC, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import style from './SignUpScreenStyle';
import Text from 'src/components/Text';
import { SignUpScreenProps } from './SignUpScreenProps';
import SignUpForm from 'src/components/Forms/SignUpForm';
import CustomButton from 'src/components/CustomButton';
import { color, spacing } from 'src/theme';

/**
 * Screen component description
 *
 * @returns Screen
 */
const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
	// Context

	// Custom hooks

	// Internal state

	useEffect(() => {}, []);

	// Component JSX
	return (
		<SafeAreaView
			// style={}
			testID='SignUpScreen'
			style={style.screenWrapper}
		>
			<Text h1 title='Signup' style={style.title} />
			<Text p title='Sign up to track and share your painted stones.' />
			<SignUpForm />
			<View style={style.buttonGroup}>
				<CustomButton
					textButton
					small
					title='Already have an account? Sign in'
					onPress={() => navigation?.navigate('LoginScreen')}
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
	);
};

export default SignUpScreen;
