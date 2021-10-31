import React, { FC, useEffect } from 'react';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';
import style from './LoadingScreenStyle';
import { LoadingScreenProps } from './LoadingScreenProps';
import Loader from 'src/components/Loader';

/**
 * Screen component description
 *
 * @returns Screen
 */
const LoadingScreen: FC<LoadingScreenProps> = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			testID='LoadingScreen'
		>
			<Loader />
		</SafeAreaView>
	);
};

export default LoadingScreen;
