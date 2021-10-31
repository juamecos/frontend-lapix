import React, { FC, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './PermissionsScreenStyle';
import { PermissionsScreenProps } from './PermissionsScreenProps';

import CustomButton from 'src/components/CustomButton';
import { usePermissions } from '../../context/permissionsContext/permissionsContext';
import Text from 'src/components/Text';
import Title from 'src/components/Title';
import { spacing } from '../../theme/spacing';
import { color } from 'src/theme';
import { shadow } from '../../theme/shadow';

/**
 * Screen component description
 *
 * @returns Screen
 */
const PermissionsScreen: FC<PermissionsScreenProps> = ({
	route,
	navigation,
}) => {
	// From the previous screen
	const initialParams = route?.params;

	// Context

	const { askLocationPermission } = usePermissions();

	useEffect(() => {}, []);

	// Component JSX
	return (
		<SafeAreaView style={styles.container} testID='PermissionsScreen'>
			<Text
				h3
				style={styles.title}
				title='In this app the use of the GPS is required'
			/>

			<CustomButton
				large
				rounded
				primary
				title='Permission'
				styleBtn={{ ...shadow.light }}
				onPress={askLocationPermission}
			/>
		</SafeAreaView>
	);
};

export default PermissionsScreen;
