import React from 'react';
import {
	TextInput as RNTextInput,
	Text as RNText,
	View,
	NativeSyntheticEvent,
	TextInputFocusEventData,
	ReturnKeyTypeOptions,
} from 'react-native';
import { FormikTouched, FormikErrors } from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'src/theme';
import styles from './InputStyle';
import Text from 'src/components/Text';

export interface Props {
	formikKey: string;
	label: string;
	value: string;
	iconName?: string;
	placeholder: string;
	touched?: FormikTouched<{ [field: string]: any }>;
	errors?: FormikErrors<{ [field: string]: any }>;
	autofocus?: boolean;
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
	autoCompleteType?:
		| 'name'
		| 'cc-csc'
		| 'cc-exp'
		| 'cc-exp-month'
		| 'cc-exp-year'
		| 'cc-number'
		| 'email'
		| 'password'
		| 'postal-code'
		| 'street-address'
		| 'tel'
		| 'username'
		| 'off'
		| undefined;
	returnKeyType?: ReturnKeyTypeOptions | undefined;
	returnKeyLabel?: string;
	keyboardAppearance?: 'default' | 'light' | 'dark' | undefined;
	secureTextEntry?: boolean;
	onChangeText?: (e: string | React.ChangeEvent<any>) => void;
	onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const Input: React.FC<Props> = ({
	formikKey,
	value,
	iconName,
	label,
	placeholder,
	errors,
	touched,
	...rest
}) => {
	const validationColor = '#223e4b';
	return (
		<View>
			<Text h5 title={label} />
			<View testID='Input' style={styles.inputWrapper}>
				{iconName && (
					<View style={styles.icon}>
						<Icon name={iconName} color={validationColor} size={16} />
					</View>
				)}
				<View style={styles.input}>
					<RNTextInput value={value} placeholder={placeholder} {...rest} />
				</View>
			</View>
			<RNText style={{ color: color.error }}>
				{touched && errors ? touched[formikKey] && errors[formikKey] : null}
			</RNText>
		</View>
	);
};

export default Input;
