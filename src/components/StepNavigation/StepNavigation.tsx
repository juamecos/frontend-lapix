import React from 'react';
import { View } from 'react-native';
import Step from '../Step';
import styles from './StepNavigationStyle';
import ProgressBar from '../ProgressBar/ProgressBar';

export type Props = {
	labelArray: string[];
};

const StepNavigation: React.FC<Props> = ({ labelArray }) => {
	const stepList = labelArray.map((item, index) => {
		return <Step label={item} key={item} index={index} />;
	});

	return (
		<View testID='StepNavigation' style={styles.stepWrapper}>
			<ProgressBar />

			{stepList}
		</View>
	);
};

export default StepNavigation;
