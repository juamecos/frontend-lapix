import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: spacing.vertical.nano,
	},
	text: {
		paddingLeft: 15,
	},
	textBottom: { paddingLeft: 0 },
});
