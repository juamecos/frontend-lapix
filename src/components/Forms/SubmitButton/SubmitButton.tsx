import React from 'react';
import { Button, View } from 'react-native';
import { useFormikContext } from 'formik';
import styles from 'src/components/Forms/SubmitButton/SubmitButtonStyle';

interface SubmitButtonProps {
	title: string;
}

const SubmitButton = ({ title }: SubmitButtonProps) => {
	const { handleSubmit, isValid } = useFormikContext();
	return (
		<View testID='submit-button' style={styles.submitBtn}>
			<Button onPress={handleSubmit} title={title} disabled={!isValid} />
		</View>
	);
};

export default SubmitButton;
