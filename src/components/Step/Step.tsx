import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import reactotron from 'reactotron-react-native';
import { useStone } from 'src/context/stoneContext/stoneContext';
import styles from './StepStyle';

export type Props = {
	label?: string;
	index: number;
};

const Step: React.FC<Props> = ({ label, index }) => {
	const { step, setStep } = useStone();

	const handleOnPress = () => {
		reactotron.log('Handle On Press');

		setStep(index);
	};

	useEffect(() => {
		if (step === index) {
			reactotron.log('estep:', step);
		}
	}, [step]);

	return (
		<View testID='Step' style={styles.stepBlock}>
			<Pressable style={styles.circleWrapper} onPress={handleOnPress}>
				<View style={[styles.circle, step === index && styles.currentStep]}>
					<Text
						style={[
							styles.stepNumber,
							step === index && styles.currentStepNumber,
						]}
					>
						{index + 1}
					</Text>
				</View>
				<Text
					style={[styles.stepLabel, step === index && styles.currentStepLabel]}
				>
					{label}
				</Text>
			</Pressable>
		</View>
	);
};

export default Step;
