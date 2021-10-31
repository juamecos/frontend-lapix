import { StyleSheet } from 'react-native';
import { spacing } from 'src/theme';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingVertical: spacing.vertical.large,
	},
});
