import React from 'react';
import { Text as RNText, TextInput, View } from 'react-native';
import Text from 'src/components/Text';
import styles from 'src/components/Forms/Field/FieldStyle';
import { color } from 'src/theme';

const Field = (props: any) => {
	const {
		label,
		placeholder,
		field: { name, onBlur, onChange, value },
		form: { errors, touched, setFieldTouched },
		...inputProps
	} = props;

	const hasError = errors[name] && touched[name];
	return (
		<View testID='field-component' style={styles.inputBox}>
			<Text h5 title={label} />
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={color.primary}
				contextMenuHidden
				autoCorrect={inputProps.autoCorrect}
				style={styles.inputComponent}
				onChangeText={text => onChange(name)(text)}
				onBlur={() => {
					setFieldTouched(name);
					onBlur(name);
				}}
				autoCapitalize='none'
				autoCorrect={false}
				value={value}
				{...inputProps}
			/>
			{hasError && <RNText style={styles.errorMessage}>{errors[name]}</RNText>}
		</View>
	);
};

export default Field;
