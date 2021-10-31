import { StyleSheet } from 'react-native';
import { color } from 'src/theme';
import { spacing } from '../../theme/spacing';

export default StyleSheet.create({
	container: {},
	wrapper: {
		top: -spacing.vertical.small / 2,
		width: spacing.vertical.small,
		height: spacing.vertical.small,
		borderRadius: 9999,
		backgroundColor: color.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
	focused: {
		backgroundColor: color.primaryDarker,
		shadowColor: color.primaryDarker,
		elevation: 20,
	},
});
