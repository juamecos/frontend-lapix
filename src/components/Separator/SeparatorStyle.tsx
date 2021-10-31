import { StyleSheet } from 'react-native';
import { color } from 'src/theme/color';
import { spacing } from '../../theme/spacing';
export default StyleSheet.create({
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: color.palette.lighterGrey,
		marginVertical: spacing.vertical.nano,
	},
});
