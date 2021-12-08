import React, { Dispatch, SetStateAction } from 'react';
import { View, Text } from 'react-native';
import Modal from '../Modal';
import styles from './ModalSingleStoneStyle';
import SingleStone from 'src/components/SingleStone';
import { IStone } from 'src/interfaces/IStone';

export type Props = {
	modalOpen: boolean;
	setModalOpen: Dispatch<SetStateAction<boolean>>;
	selected: IStone | null;
};

const ModalSingleStone: React.FC<Props> = ({
	modalOpen,
	setModalOpen,
	selected,
}) => {
	return (
		<View testID='ModalSingleStone'>
			<Modal
				// title={'Single Stone'}
				isVisible={modalOpen}
				animationType='slide'
				// acceptButton
				// acceptButtonTitle='Accept'
				// acceptButtonOnPress={setIsVisible}
				handleClose={setModalOpen}
			>
				{modalOpen && <SingleStone data={selected} />}
			</Modal>
		</View>
	);
};

export default ModalSingleStone;
