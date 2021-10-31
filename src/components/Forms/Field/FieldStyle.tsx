import { StyleSheet } from 'react-native';
import { color, spacing } from 'src/theme';

export default StyleSheet.create({
	inputBox: {
		borderBottomColor: color.line,
		borderBottomWidth: 1,
		height: 50,
		marginVertical: spacing.vertical.micro,
	},
	inputComponent: {
		paddingVertical: 0,
		marginVertical: 0,
	},
	errorMessage: {
		marginTop: spacing.vertical.nano,
		color: color.error,
	},
});
