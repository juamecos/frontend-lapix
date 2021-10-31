import { StyleSheet } from 'react-native';
import { spacing, color } from 'src/theme';

export default StyleSheet.create({
	modalContainer: {
		height: spacing.hp(100),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.modalBg,
	},
	modalContent: {
		width: spacing.horizontal.mega,
		backgroundColor: color.palette.white,
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderRadius: spacing.horizontal.tiny,
		paddingVertical: spacing.vertical.tiny,
	},
	close: {
		position: 'absolute',
		right: -5,
		justifyContent: 'flex-end',
	},
	modalHeader: {
		flexDirection: 'row',
		paddingBottom: spacing.vertical.micro,
	},
	modalFooter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: spacing.vertical.micro,
		width: '100%',
	},
});
