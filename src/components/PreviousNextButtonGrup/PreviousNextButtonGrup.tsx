/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { useStone } from 'src/context/stoneContext/stoneContext';
import { color, spacing } from 'src/theme';
import CustomButton from '../CustomButton';
import styles from './PreviousNextButtonGrupStyle';

export type Props = {
	labelArray: string[];
	onPressNext: (step: number) => void;
	onPressPrevious: (step: number) => void;
};

const PreviousNextButtonGrup: React.FC<Props> = ({
	labelArray,
	onPressNext,
	onPressPrevious,
}) => {
	const { step } = useStone();
	return (
		<View
			testID='PreviousNextButtonGrup'
			style={[
				styles.container,
				step === 0 && { justifyContent: 'flex-end' },
				step === labelArray.length && { justifyContent: 'flex-start' },
			]}
		>
			{step !== 0 && (
				<CustomButton
					small
					textButton
					iconSize={spacing.wp(7)}
					iconColor={color.secondary}
					textColor={color.secondary}
					title='Previous'
					iconName='arrow-back-circle-outline'
					onPress={() => onPressPrevious(step)}
				/>
			)}
			{step !== labelArray.length - 1 && (
				<CustomButton
					small
					textButton
					right
					iconSize={spacing.wp(7)}
					iconColor={color.primary}
					textColor={color.primary}
					title='Next'
					iconName='arrow-forward-circle-outline'
					onPress={() => onPressNext(step)}
				/>
			)}
		</View>
	);
};

export default PreviousNextButtonGrup;
