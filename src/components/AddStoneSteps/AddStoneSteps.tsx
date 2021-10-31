import React from 'react';
import { View } from 'react-native';
import styles from './AddStoneStepsStyle';
import StepNavigation from '../StepNavigation/StepNavigation';
import { useStone } from 'src/context/stoneContext/stoneContext';
import PreviousNextButtonGrup from '../PreviousNextButtonGrup/PreviousNextButtonGrup';

export type Props = {
	labelArray: string[];
};

const AddStoneSteps: React.FC<Props> = ({ labelArray }) => {
	const { setStep } = useStone();

	return (
		<View testID='AddStoneSteps' style={styles.container}>
			<View style={styles.wrapper}>
				<StepNavigation labelArray={labelArray} />
				<PreviousNextButtonGrup
					labelArray={labelArray}
					onPressNext={(data: number) => setStep(data + 1)}
					onPressPrevious={(data: number) => setStep(data - 1)}
				/>
			</View>
		</View>
	);
};

export default AddStoneSteps;
