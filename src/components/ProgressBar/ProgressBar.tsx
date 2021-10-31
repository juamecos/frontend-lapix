import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { useStone } from 'src/context/stoneContext/stoneContext';
import styles from './ProgressBarStyle';

export type Props = {
	currentStep?: number;
};

const ProgressBar: React.FC<Props> = () => {
	const [width, setWidth] = useState<number | string>(0);

	const { step } = useStone();

	useEffect(() => {
		if (step === 0) {
			setWidth(0);
		}
		const w = step * 25;
		setWidth(`${w}%`);
	}, []);

	useEffect(() => {
		if (step === 0) {
			setWidth(0);
		}
		const w = step * 25;
		setWidth(`${w}%`);
	}, [step]);

	return (
		<View testID='ProgressBar' style={styles.progressBar}>
			<Animated.View style={[styles.progressBarPosition, { width }]} />
		</View>
	);
};

export default ProgressBar;
