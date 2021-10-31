import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';
import { color } from '../../theme/color';
import { shadow } from '../../theme/shadow';

export default StyleSheet.create({
	card: {
		backgroundColor: color.palette.white,
		height: spacing.vertical.xlarge,
		width: spacing.wp(95),
		marginVertical: spacing.vertical.micro,
		borderRadius: spacing.horizontal.tiny,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 9,

		elevation: 3,
	},
	container: { flex: 1 },
	space: { flex: 9 },
	header: {
		flexDirection: 'row',
		height: '22.5%',
		width: '100%',
		paddingVertical: spacing.vertical.micro,
		paddingHorizontal: spacing.vertical.micro,
	},
	headerRight: {
		height: '100%',
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	avatar: {
		borderRadius: 99999,
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: spacing.vertical.micro,
	},
	group: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	userName: {},
	published: {},
	headerLeft: { height: '100%', width: 60 },
	menu: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	body: { flex: 1, backgroundColor: 'green' },
	image: { flex: 1 },
	footer: {
		flexDirection: 'row',
		height: '16.5%',
		width: '100%',
		paddingVertical: spacing.vertical.micro,
		paddingHorizontal: spacing.vertical.micro,
	},
	footerLeft: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	views: {},
	footerRight: {
		width: '40%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	likes: {
		marginRight: 20,
	},
	comments: {},
});
