import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	feedContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: spacing.vertical.large,
	},
});
