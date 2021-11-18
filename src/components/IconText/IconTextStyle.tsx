import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';
import { color } from '../../theme/color';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: spacing.vertical.nano,
	},
	text: {
		paddingLeft: 15,
	},
	iconShadow: {
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	textBottom: { paddingLeft: 0 },
	badge: {
		backgroundColor: color.secondary,
		fontSize: 13,
		height: 18,
		width: 18,
		borderRadius: 20,
		position: 'absolute',
		left: spacing.horizontal.tiny,
		textAlign: 'center',
		color: color.textWhite,
	},
});
