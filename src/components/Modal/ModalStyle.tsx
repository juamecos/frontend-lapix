import { StatusBar, StyleSheet } from 'react-native';
import { spacing, color } from 'src/theme';

export default StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingVertical: spacing.vertical.tiny,
		backgroundColor: color.modalBg,
	},
	close: {
		position: 'absolute',
		right: -spacing.horizontal.micro,
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
