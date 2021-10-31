import { Platform } from 'react-native';

export const typography = {
	/**
	 * The primary font.  Used in most places.
	 */
	primary: Platform.select({ ios: 'Helvetica', android: 'normal' }),

	/**
	 * An alternate font used for perhaps titles and stuff.
	 */
	secondary: Platform.select({ ios: 'San Francisco', android: 'Roboto' }),
};
