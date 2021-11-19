import IUser from './IUser';

export interface IStone {
	__typename?: string;
	id: number;
	image: string;
	title?: string;
	description?: string;
	registerDate: string;
	latitude: number;
	longitude: number;
	user: IUser;
	active: boolean;
	abuse: boolean;
	code: string;
}
