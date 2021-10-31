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
import { isTypeNode } from 'graphql';

/**
 * Screen component description
 *
 * @returns Screen
 */
const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
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

	const renderItem = ({ item }: { item: IStone }) => <Card data={item} />;

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
		</View>
	);
};

export default HomeScreen;
