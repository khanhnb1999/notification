import {Button} from 'antd';
import {RecaptchaVerifier, getAuth, signInWithPhoneNumber} from 'firebase/auth';

const Phone = () => {
	const auth = getAuth();
	const phoneNumber = '0782791442';
	const signInWithPhone = async () => {
		let verify = new RecaptchaVerifier('recaptcha-container', {
			'size': 'invisible'
		}, auth);

		const dataPhone = await signInWithPhoneNumber(phoneNumber, verify);
		console.log(dataPhone);
	}

	return (
		<div>
			<Button onClick={signInWithPhone}>SignIn Phone</Button>
		</div>
	)
};

export default Phone;