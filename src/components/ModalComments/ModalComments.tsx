import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import TouchableOpacity from 'react-native-gesture-handler/lib/typescript/components/touchables/TouchableOpacity';
import { IComment } from 'src/context/commentProvider.tsx/commentContextTypes';
import { useStoneLazyQuery, useStoneQuery } from 'src/generated/graphql';
import { useCommentsHook } from 'src/hooks/useComments';
import { IStone } from 'src/interfaces/IStone';
import Card from '../Card';
import Loader from '../Loader';
import Modal from '../Modal';
import Text from '../Text';
import Title from '../Title';
import styles from './ModalCommentsStyle';
import { spacing } from '../../theme/spacing';
import Comment from '../Comment';

export type Props = {
	modalOpen: boolean;
	setModalOpen: Dispatch<SetStateAction<boolean>>;
	// selected: IComment[] | [];
	stoneID: number;
};

const ModalComments: React.FC<Props> = ({
	modalOpen,
	setModalOpen,
	stoneID,
}) => {
	const [
		getStone,
		{ loading: stoneLoading, error: stoneError, data: stoneData },
	] = useStoneLazyQuery({ fetchPolicy: 'cache-first' });

	useEffect(() => {
		if (modalOpen) {
			getStone({
				variables: {
					id: stoneID, // selected.id
					include: false,
				},
			});
		}
		console.log(modalOpen);
	}, [modalOpen]);

	if (stoneLoading) {
		return <Loader />;
	}
	if (stoneError) {
		console.log('StoneError:', stoneError);
	}

	if (stoneData) {
		console.log('stoneID', stoneID, 'stoneData: ', stoneData);
	}

	const stone = stoneData?.stone.stone;

	const renderItem = ({ item }) => (
		<Comment comment={item.comment} onPress={() => console.log(item.comment)} />
	);

	const renderHeader = stone => {
		<Card data={stone} />;
	};

	return (
		<View testID='ModalComments'>
			<Modal
				// title={'Single Stone'}
				isVisible={modalOpen}
				animationType='slide'
				// acceptButton
				// acceptButtonTitle='Accept'
				// acceptButtonOnPress={setIsVisible}
				handleClose={setModalOpen}
			>
				{modalOpen && stone && (
					<FlatList
						data={stone.comments}
						renderItem={renderItem}
						keyExtractor={item => item.id}
						ListHeaderComponent={<Card data={stone} />}
					/>
				)}
			</Modal>
		</View>
	);
};

export default ModalComments;
