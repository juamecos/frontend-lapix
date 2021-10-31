import { StyleSheet } from 'react-native';
import { color, spacing } from 'src/theme';

export default StyleSheet.create({
	text: {
		paddingHorizontal: spacing.horizontal.small,
		paddingVertical: spacing.horizontal.tiny,
		textAlign: 'center',
		borderBottomWidth: 1,
		borderBottomColor: color.palette.lighterGrey,
		borderTopWidth: 1,
		borderTopColor: color.palette.lighterGrey,
	},
	stepComponentWrapper: {
		backgroundColor: 'red',
		flex: 1,
	},
});
