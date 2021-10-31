export interface Props {
	title: string;
	children: React.ReactNode;
	isVisible: boolean;
	handleClose: () => void;
}
