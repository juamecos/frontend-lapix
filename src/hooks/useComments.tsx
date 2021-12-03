import { useState } from 'react';
import { useCountCommentsQuery } from 'src/generated/graphql';
import { IStone } from 'src/interfaces/IStone';

export type ResultUseComments = {
	countComments: number | undefined | null;
};

export const useComments = (data: IStone): ResultUseComments => {
	const [loadingAction, setLoadingAction] = useState<boolean>(false);

	const stoneID = data.id;

	const {
		data: dataCountComments,
		error: errorCountComments,
		loading: loadingCountComments,
	} = useCountCommentsQuery({
		variables: {
			stoneID,
		},
	});

	if (loadingAction || loadingCountComments) {
		return null;
	}
	const countComments = dataCountComments?.countComments?.count;

	return { countComments };
};
