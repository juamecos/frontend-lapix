import { StyleSheet } from 'react-native';
import { color, spacing } from 'src/theme';

export default StyleSheet.create({
	inputBox: {
		marginVertical: spacing.vertical.nano,
	},
	inputComponent: {
		height: 50,
		borderBottomColor: color.line,
		borderBottomWidth: 1,
		borderLeftColor: color.line,
		borderLeftWidth: 1,
		paddingVertical: 0,
		marginVertical: 0,
	},
	errorMessage: {
		marginTop: spacing.vertical.nano,
		color: color.error,
	},
});
