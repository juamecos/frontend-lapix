import { StatusBar, StyleSheet } from 'react-native';
import { color } from 'src/theme';
import { spacing } from '../../theme/spacing';

export default StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,

		// padding: spacing.vertical.micro,
	},
	userInfo: {
		position: 'absolute',
		top: spacing.hp(75),
		flexDirection: 'row',
		alignSelf: 'flex-start',
		paddingTop: spacing.vertical.micro,
		paddingHorizontal: spacing.horizontal.small,
	},
	avatar: {
		borderRadius: 99999,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	info: {
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: spacing.horizontal.tiny,
	},

	image: {
		flex: 1,
		height: spacing.hp(100),

		// width: '100%',
		backgroundColor: color.modalBg,

		// position: 'absolute',
		// top: spacing.vertical.large,
		// right: spacing.horizontal.small,
		// bottom: spacing.vertical.small,
		// left: spacing.horizontal.small,
	},
});
