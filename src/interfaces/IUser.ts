import IOtp from './IOtp';
export default interface IUser {
	__typename: string;
	id?: string;
	userName?: string;
	email: string;
	password?: string | Buffer;
	registerDate?: string;
	avatar?: string;
	role?: string;
	active?: boolean;
	otp?: IOtp;
}
