import { ApolloError } from '@apollo/client';
import { useState, useEffect } from 'react';
import {
	useCountLikesQuery,
	useIsLikeQuery,
	useAddLikeMutation,
} from 'src/generated/graphql';
import { IStone } from 'src/interfaces/IStone';

export type ResultUseLikes = {
	countLikes: number;
	isLike: boolean;
	errorLikes: ApolloError | null;
	loadingAction: boolean;
	onActionLike: () => Promise<void>;
};

export const useLikes = (data: IStone): ResultUseLikes => {
	const [loadingAction, setLoadingAction] = useState(false);
	const [isLike, setIsLike] = useState(false);
	const [countLikes, setCountLikes] = useState(0);
	const [errorLikes, setErrorLikes] = useState<ApolloError | null>(null);
	const stoneID = data.id;

	const {
		data: dataCountLikes,
		error: errorCountLikes,
		loading: loadingCountLikes,
		refetch: refetchCountLikesQuery,
	} = useCountLikesQuery({
		variables: {
			stoneID,
		},
		fetchPolicy: 'cache-first',
	});

	const {
		data: dataIsLike,
		loading: loadingIsLike,
		error: errorIsLike,
		refetch: refetchIsLikeQuery,
	} = useIsLikeQuery({
		variables: {
			stoneID,
		},
	});

	const [addLike] = useAddLikeMutation();

	useEffect(() => {
		setCountLikes(dataCountLikes?.countLikes?.count!);
	}, [dataCountLikes]);

	useEffect(() => {
		setIsLike(dataIsLike?.isLike?.isLike!);
	}, [dataIsLike]);

	useEffect(() => {
		setLoadingAction(loadingCountLikes);
	}, [loadingCountLikes]);

	useEffect(() => {
		setLoadingAction(loadingIsLike);
	}, [loadingIsLike]);

	useEffect(() => {
		if (errorCountLikes) {
			setErrorLikes(errorCountLikes);
		}
	}, [errorCountLikes]);
	useEffect(() => {
		if (errorIsLike) {
			setErrorLikes(errorIsLike);
		}
	}, [errorIsLike]);

	const refetchAllQueries = () => {
		refetchIsLikeQuery({
			stoneID,
		});

		refetchCountLikesQuery({
			stoneID,
		});
	};

	const onAddLike = async () => {
		setLoadingAction(true);
		try {
			await addLike({
				variables: {
					id: stoneID,
				},
				awaitRefetchQueries: true,
			});
			refetchAllQueries();
		} catch (error) {
			console.log(error);
		}
		setLoadingAction(false);
	};

	const onActionLike = async () => {
		if (!loadingAction) {
			await onAddLike();
		}
	};

	return { countLikes, isLike, errorLikes, loadingAction, onActionLike };
};
