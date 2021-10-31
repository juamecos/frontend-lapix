import { StyleSheet } from 'react-native';
import { color, spacing } from 'src/theme';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: spacing.horizontal.small,
	},

	titleBox: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: spacing.vertical.tiny,
	},

	editProfile: {
		position: 'absolute',
		top: spacing.hp('2.8%'),
		right: spacing.hp('2.8%'),
	},

	userInfoSection: {
		flex: 1,
		paddingVertical: spacing.vertical.tiny,
	},
	userAvatarSection: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},

	infoBoxWrapper: {
		borderBottomColor: color.palette.lighterGrey,
		borderBottomWidth: 1,
		borderTopColor: color.palette.lighterGrey,
		borderTopWidth: 1,
		flexDirection: 'row',
		height: spacing.vertical.medium,
	},

	infoBox: {
		width: '50%',
		alignItems: 'center',
		justifyContent: 'center',
	},

	menuWrapper: {
		flex: 1,
		paddingTop: spacing.vertical.tiny,
	},

	menuItem: {
		padding: spacing.vertical.nano,
	},
});
