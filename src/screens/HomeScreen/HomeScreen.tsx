import React, { FC, useEffect, useState, useRef } from 'react';
import style from './HomeScreenStyle';
import { HomeScreenProps } from './HomeScreenProps';
import { ActivityIndicator, FlatList, View } from 'react-native';
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
import { color } from 'src/theme';
import Text from 'src/components/Text';

/**
 * Screen component description
 *
 * @returns Screen
 */

interface IStonePageInfo {
	__typename?: 'ResultInfo' | undefined;
	page: number;
	total: number;
	itemsPage: number;
	pages: number;
}

interface StoneData {
	__typename?: 'ResultStones' | undefined;
	status: boolean;
	message: string;
	info?: IStonePageInfo | undefined;
	stones?: IStone[] | undefined;
}

const initialSelected = null;
const itemsPage = 10;

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	const { modalOpen, setModalOpen, selected, setSelected, setModalState } =
		useModalWithData(false, initialSelected);
	const [isFetching, setIsFetching] = useState(false);

	const { data, error, loading, fetchMore, refetch } = useStonesQuery({
		fetchPolicy: 'cache-and-network',
		variables: {
			page: 1,
			itemsPage: itemsPage,
		},
	});

	let stonesArray: any = useRef([]);

	const onRefresh = () => {
		setIsFetching(true);
		refetch();
		setIsFetching(false);
	};

	const handleOnEndReached = () => {
		console.log('End reached');

		if (
			data?.stones?.info?.page &&
			data?.stones?.info?.page < data?.stones?.info?.pages
		) {
			return fetchMore({
				variables: {
					page: data?.stones?.info?.page + 1,
					itemsPage,
				},
				updateQuery: onUpdate,
			});
		}
	};

	const onUpdate = (prev: StoneData, { fetchMoreResult }) => {
		if (!fetchMoreResult) {
			return prev;
		}
		if (!prev) {
			return [{}];
		}

		const {
			info: newInfo,
			status: newStatus,
			message: newMessage,
			stones: newStones,
		} = fetchMoreResult.stones;

		const prevStones = prev?.stones?.stones;

		const stones = [...prevStones, ...newStones];

		return Object.assign({}, prev, {
			stones: {
				__typename: prev.__typename,
				info: newInfo,
				status: fetchMoreResult.stones.status,
				message: fetchMoreResult.stones.message,
				stones,
			},
		});
	};

	if (data && data.stones && data.stones.stones) {
		stonesArray.current = data?.stones?.stones;
	}

	if (error) {
		return new Error(error.message);
	}
	if (loading) {
		<Loader />;
	}

	const stoneData = data?.stones?.stones;

	const handleOnSelected: (id: number) => void = (id: number) => {
		const stoneSelectedData: IStone[] = stonesArray.current.filter(
			item => item.id === id
		);
		setSelected(stoneSelectedData[0]);
		setModalState(true);
	};

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
				onEndReachedThreshold={1} // Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.
				onEndReached={handleOnEndReached}
			/>
			{data?.stones?.info?.page < data?.stones?.info.pages ? (
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
