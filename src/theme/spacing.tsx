import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
/**
 * Global spacing based in library react-native-responsive-screen
 * nano: '1%',
		micro: '2%',
		tiny: '4%',
		small: '8%',
		medium: '12%',
		large: '24%',
		xlarge: '40%%',
		half: '50%%',
		huge: '64%',
		mega: '90%',
		tera: '100%',
 */
export const spacing = {
	horizontal: {
		nano: wp('1%'),
		micro: wp('2%'),
		tiny: wp('4%'),
		small: wp('8%'),
		medium: wp('12%'),
		large: wp('24%'),
		huge: wp('64%'),
		xlarge: wp('48%%'),
		half: wp('50%%'),
		mega: wp('90%'),
		tera: wp('100%'),
	},
	vertical: {
		nano: hp('1%'),
		micro: hp('2%'),
		tiny: hp('4%'),
		small: hp('8%'),
		medium: hp('12%'),
		large: hp('24%'),
		xlarge: hp('48%%'),
		half: hp('50%%'),
		huge: hp('64%'),
		mega: hp('90%'),
		tera: hp('100%'),
	},
	wp,
	hp,
};
