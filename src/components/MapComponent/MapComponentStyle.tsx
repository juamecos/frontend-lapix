import { StyleSheet } from 'react-native';
import { spacing, color } from 'src/theme';

export default StyleSheet.create({
	container: {
		height: 300,
		width: '100%',
	},
	map: {
		height: spacing.hp(35),
		width: spacing.wp(100),
		backgroundColor: 'orange',
		marginBottom: 20,
	},
});
