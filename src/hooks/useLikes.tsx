import { useState } from 'react';
import {
	useCountLikesQuery,
	useIsLikeQuery,
	useAddLikeMutation,
} from 'src/generated/graphql';
import { IStone } from 'src/interfaces/IStone';

export type ResultUseLikes =
	| [number | null | undefined, boolean | null | undefined, () => Promise<void>]
	| null;

export const useLikes = (data: IStone): ResultUseLikes => {
	const [loadingAction, setLoadingAction] = useState(false);

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
	});

	const {
		data: dataIsLike,
		loading: loadingIsLike,
		refetch: refetchIsLikeQuery,
	} = useIsLikeQuery({
		variables: {
			stoneID,
		},
	});

	const [addLike] = useAddLikeMutation();

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

	if (loadingIsLike || loadingCountLikes) {
		return null;
	}

	const isLike = dataIsLike?.isLike?.isLike;
	const countLikes = dataCountLikes?.countLikes?.count;

	return [countLikes, isLike, onActionLike];
};
