import { QueryLazyOptions } from '@apollo/client';
import { useState, useEffect } from 'react';
import {
	CommentQueryResult,
	CommentsLazyQueryHookResult,
	Exact,
	useCommentsLazyQuery,
	useCountCommentsQuery,
	useUserLazyQuery,
} from 'src/generated/graphql';
import { IStone } from 'src/interfaces/IStone';
import useModalWithData from './useModalWithData';
import { IComment } from '../interfaces/IComment';

export type UseCommentsResult = {
	modalCommentsOpen: boolean;

	setModalCommentsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	onHandleCommentPress: () => void;
};

const initialSelected = null;
const itemsPage = 10;

export const useCommentsHook = (): UseCommentsResult => {
	const {
		modalOpen: modalCommentsOpen,
		selected: selectedComments,
		setModalOpen: setModalCommentsOpen,
		setSelected: setSelectedComments,
		setModalState: setModalCommentsState,
	} = useModalWithData(false, initialSelected);

	const onHandleCommentPress = () => {
		console.log('onHandleCommentPress');

		setModalCommentsOpen(true);
	};

	return {
		modalCommentsOpen,
		setModalCommentsOpen,
		onHandleCommentPress,
	};
};
