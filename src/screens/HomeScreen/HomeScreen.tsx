import React, { FC, useEffect, useState } from 'react';
import style from './HomeScreenStyle';
import { HomeScreenProps } from './HomeScreenProps';
import { FlatList, View } from 'react-native';
import Loader from 'src/components/Loader';
import { useStonesQuery } from 'src/generated/graphql';
import Card from 'src/components/Card';
import Title from 'src/components/Title';
import { useStone } from 'src/context/stoneContext/stoneContext';
import { IStone } from 'src/interfaces/IStone';
import Modal from 'src/components/Modal';
import SingleStone from 'src/components/SingleStone';
import useModal from 'src/hooks/useModal';
import useModalWithData from 'src/hooks/useModalWithData';

/**
 * Screen component description
 *
 * @returns Screen
 */

const initialSelected = null;
const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	const { modalOpen, setModalOpen, selected, setSelected, setModalState } =
		useModalWithData(false, initialSelected);

	const { data, error, loading } = useStonesQuery({
		fetchPolicy: 'cache-and-network',
		variables: {
			page: 1,
			itemsPage: 18,
		},
	});

	if (error) {
		return new Error(error.message);
	}
	if (loading) {
		<Loader />;
	}

	const handleOnSelected: (id: number) => void = (id: number) => {
		// const stoneSelectedData = data?.stones?.stones[id];
		const stoneSelectedData: IStone[] =
			data?.stones?.stones &&
			data?.stones?.stones.filter(item => item.id === id);
		setSelected(stoneSelectedData[0]);
		setModalState(true);
	};

	const renderItem = ({ item }: { item: IStone }) => (
		<Card data={item} handleOnSelected={handleOnSelected} />
	);

	return (
		<View style={style.container} testID='HomeScreen'>
			<Title title='Stones' />

			{loading || !data?.stones ? (
				<Loader />
			) : (
				<FlatList
					showsVerticalScrollIndicator={false}
					contentContainerStyle={style.feedContainer}
					data={data.stones.stones}
					renderItem={renderItem}
					keyExtractor={(item, index) => index.toString()}
				/>
			)}
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

export default HomeScreen;
