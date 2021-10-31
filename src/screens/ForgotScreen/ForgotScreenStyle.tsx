import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export default StyleSheet.create({
	title: {
		marginBottom: spacing.vertical.tiny,
	},
	subtitle: {
		width: spacing.horizontal.huge,
		lineHeight: 30,
	},
	screenWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonGroup: {},
});
