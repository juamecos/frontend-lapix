export interface IComment {
	__typename: string;
	id: number;
	stoneID: number;
	userID: number;
	comment: string;
	registerDate: string;
	abuse: boolean;
	active: boolean;
}
