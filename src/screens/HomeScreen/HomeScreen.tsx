import React, { FC, useEffect, useState, useRef } from 'react';
import style from './HomeScreenStyle';
import { HomeScreenProps } from './HomeScreenProps';
import { ActivityIndicator, FlatList, View } from 'react-native';

import Card from 'src/components/Card';
import Title from 'src/components/Title';

import { IStone } from 'src/interfaces/IStone';

import { color } from 'src/theme';
import Text from 'src/components/Text';
import ModalSingleStone from 'src/components/ModalSingleStone';

import { useStonesHook } from 'src/hooks/useStones';

/**
 * Screen component description
 *
 * @returns Screen
 */

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	const {
		stonesInfoPage,
		stonesArray,
		isFetching,
		modalOpen,
		selected,
		setModalOpen,
		handleOnSelected,
		onRefresh,
		handleOnEndReached,
	} = useStonesHook();

	const renderItem = ({ item }: { item: IStone }) => (
		<Card data={item} handleOnSelected={handleOnSelected} />
	);

	return (
		<View style={style.container} testID='HomeScreen'>
			<Title title='Stones' />

			<FlatList
				showsVerticalScrollIndicator={false}
				contentContainerStyle={style.feedContainer}
				data={stonesArray.current}
				// data={stoneData}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
				onRefresh={onRefresh}
				refreshing={isFetching}
				onEndReachedThreshold={0.5} // Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.
				onEndReached={handleOnEndReached}
			/>

			{stonesInfoPage.current.page < stonesInfoPage.current.pages ? (
				<>
					<ActivityIndicator
						style={{ height: 100 }}
						size={50}
						color={color.primaryDarker}
					/>
					<Text h5 title='Loading more stones' />
				</>
			) : (
				<Text h5 title='No more items to show' />
			)}
			<ModalSingleStone
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				selected={selected}
			/>
		</View>
	);
};

export default HomeScreen;
