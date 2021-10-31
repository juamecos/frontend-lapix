export interface ForgotData {
	email: string;
	code: string;
	password: string;
	confirmPassword: string;
}

export default interface Props {
	currentStep: number;
	setCurrentStep: any;
	// eslint-disable-next-line semi
}
