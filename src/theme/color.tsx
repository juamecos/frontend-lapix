import { palette } from './palette';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
	/**
	 * The palette is available to use, but prefer using the name.
	 */
	palette,
	/**
	 * A helper for making something see-thru. Use sparingly as many layers of transparency
	 * can cause older Android devices to slow down due to the excessive compositing required
	 * by their under-powered GPUs.
	 */
	transparent: 'rgba(0, 0, 0, 0)',
	/**
	 * The modal background.
	 */

	modalBg: '#7777776f',
	/**
	 * The screen background.
	 */
	background: palette.white,
	/**
	 * The main tinting color.
	 */
	primary: palette.blue,
	/**
	 * The main tinting color, but darker.
	 */
	primaryDarker: palette.blueDarker,
	/**
	 * The main tinting color, but darker.
	 */
	primaryLighter: palette.blueLighter,
	/**
	 * The secondary color.
	 */
	secondary: palette.orange,
	/**
	 * The secondary color, but darker.
	 */
	secondaryDarker: palette.orangeDarker,

	/**
	 * A subtle color used for borders and lines.
	 */
	line: palette.offWhite,
	/**
	 * The default color of text in many components.
	 */
	text: palette.grey,
	/**
	 * The color for dark background components.
	 */
	textWhite: palette.white,
	/**
	 * Secondary information.
	 */
	dim: palette.lightGrey,
	/**
	 * Error messages and icons.
	 */
	error: palette.error,
};
