import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import style from './ForgotScreenStyle';
import { ForgotScreenProps } from './ForgotScreenProps';

import Text from 'src/components/Text';
import ForgotForm from 'src/components/Forms/ForgotForm';
import CustomButton from 'src/components/CustomButton';
import { color, spacing } from 'src/theme';
import { Step } from 'src/components/Forms/ForgotForm/ForgotForm';

/**
 * Screen component description
 *
 * @returns Screen
 */

const ForgotScreen: FC<ForgotScreenProps> = ({ navigation }) => {
	const [currentStep, setCurrentStep] = useState<Step>(Step.one);
	useEffect(() => {}, []);

	// eslint-disable-next-line no-shadow
	const stepTextController = (currentStep: Step) => {
		switch (currentStep) {
			case Step.one:
				return 'Please enter the e-mail address that you used for registration.';
			case Step.two:
				return 'Please, enter the code that ou received via email.';
			case Step.three:
				return 'Please, change your password and confirm it';
			default:
				break;
		}
	};

	// Component JSX
	return (
		<SafeAreaView style={style.screenWrapper} testID='ForgotScreen'>
			<Text h1 title='Restore Password' style={style.title} />
			<Text p title={stepTextController(currentStep)} style={style.subtitle} />

			<ForgotForm currentStep={currentStep} setCurrentStep={setCurrentStep} />

			<View style={style.buttonGroup}>
				<CustomButton
					textButton
					small
					title='Go to sing up'
					onPress={() => navigation?.navigate('SignUpScreen')}
					styleText={{ color: color.secondary }}
					styleBtn={{ marginTop: spacing.vertical.micro }}
				/>
				<CustomButton
					textButton
					small
					title='Go to signin'
					onPress={() => navigation?.navigate('LoginScreen')}
					styleText={{ color: color.dim }}
					styleBtn={{ marginTop: spacing.vertical.tiny }}
				/>
			</View>
		</SafeAreaView>
	);
};

export default ForgotScreen;
