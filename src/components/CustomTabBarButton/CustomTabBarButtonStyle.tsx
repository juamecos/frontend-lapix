import { StyleSheet } from 'react-native';
import { color } from 'src/theme';
import { spacing } from '../../theme/spacing';

export default StyleSheet.create({
	container: {
		top: -spacing.vertical.small / 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	wrapper: {
		width: spacing.vertical.small,
		height: spacing.vertical.small,
		borderRadius: 9999,
		backgroundColor: color.primary,
	},
	focused: {
		backgroundColor: color.primaryDarker,
		shadowColor: color.primaryDarker,
		elevation: 20,
	},
});
