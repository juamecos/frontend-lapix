import * as Yup from 'yup';

const userName = Yup.string()
	.required('Username is required')
	.label('userName');
const email = Yup.string()
	.email('Please enter valid email')
	.required('Email is required')
	.label('Email');
const password = Yup.string()
	.matches(/\w*[a-z]\w*/, 'Password must have a small letter')
	.matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
	.matches(/\d/, 'Password must have a number')
	.min(8, ({ min }) => `Password must be at least ${min} characters`)
	.required('Password is required')
	.label('Password');
const confirmPassword = Yup.string()
	.oneOf([Yup.ref('password')], 'Passwords do not match')
	.required('Confirm password is required')
	.label('confirmPassword');
const code = Yup.string()
	.matches(/^[0-9]+$/, 'Must be only digits')
	.min(6, 'Must be exactly 6 digits')
	.max(6, 'Must be exactly 6 digits')
	.label('Otp');
const title = Yup.string()
	.max(64, 'Must be less than 64 characters')
	.label('title');
const description = Yup.string()
	.max(200, 'Must be less than 200 characters')
	.label('description');

const signUpValidationSchema = Yup.object().shape({
	userName,
	email,
	password,
	confirmPassword,
	title,
	description,
});

const loginValidationSchema = Yup.object().shape({ email, password });

const stepOneValidationSchema = Yup.object().shape({ email });
const stepTwoValidationSchema = Yup.object().shape({ code });
const stepThreeValidationSchema = Yup.object().shape({
	password,
	confirmPassword,
});

const stoneValidationSchema = Yup.object().shape({
	title,
	description,
});

export {
	signUpValidationSchema,
	loginValidationSchema,
	// reset password multistep form
	stepOneValidationSchema,
	stepTwoValidationSchema,
	stepThreeValidationSchema,
	stoneValidationSchema,
};
