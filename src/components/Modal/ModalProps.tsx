import { Dispatch, SetStateAction } from 'react';

export interface Props {
	title?: string;
	animationType?: 'none' | 'slide' | 'fade' | undefined;
	children: React.ReactNode;
	isVisible: boolean;
	acceptButton?: boolean;
	acceptButtonTitle?: string;
	cancelButton?: boolean;
	cancelButtonTitle?: string;
	acceptButtonOnPress?: () => void;
	cancelButtonOnPress?: () => void;
	handleClose: Dispatch<SetStateAction<boolean>>;
}
