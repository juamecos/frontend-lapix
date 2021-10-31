import { StyleSheet } from 'react-native';
import { spacing } from 'src/theme';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: spacing.horizontal.small,
	},
	avatarWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: spacing.vertical.micro,
	},
	menuWrapper: {
		flex: 1,
		paddingTop: spacing.vertical.tiny,
	},

	menuItem: {
		padding: spacing.vertical.nano,
	},
});
