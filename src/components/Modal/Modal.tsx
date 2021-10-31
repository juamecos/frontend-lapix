import React from 'react';
import { Modal as RNModal, View } from 'react-native';
import IconText from 'src/components/IconText';
import Text from 'src/components/Text';
import CustomButton from '../CustomButton';
import { Props } from './ModalProps';
import styles from './ModalStyle';

/**
 * Custom Modal component
 * @param title <string> the title of the Modal
 * @param isVisible <boolean> If is visible is true, default is false.
 * @param handleClose <function> Function to close the modal
 * @param children
 * @returns a Modal component with X Icon to close the modal and displays children
 */

const Modal: React.FC<Props> = ({
	isVisible,
	title,
	handleClose,
	children,
}) => {
	return (
		<RNModal visible={isVisible} animationType='slide'>
			<View style={styles.modalContainer}>
				<View style={styles.modalContent}>
					<IconText
						iconName='close-outline'
						onPress={() => handleClose()}
						style={styles.close}
					/>
					<View style={styles.modalHeader}>
						<Text h2 bold title={title} />
					</View>
					{children}
					<View style={styles.modalFooter}>
						<CustomButton rounded medium title='Accept' onPress={() => {}} />
						<CustomButton
							rounded
							danger
							medium
							title='Cancel'
							onPress={() => {}}
						/>
					</View>
				</View>
			</View>
		</RNModal>
	);
};

export default Modal;
