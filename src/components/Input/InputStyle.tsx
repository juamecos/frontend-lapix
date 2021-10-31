import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		width: '100%',
		borderRadius: 8,
		borderWidth: StyleSheet.hairlineWidth,
		padding: 8,
		marginBottom: 12,
	},
	icon: {
		padding: 8,
	},
	input: {
		flex: 1,
	},
});
