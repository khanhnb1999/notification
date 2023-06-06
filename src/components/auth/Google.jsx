import {Button} from 'antd';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '../../../config';

const Google = () => {
	auth.languageCode = 'it';
	const provider = new GoogleAuthProvider();

	const signInWithGoogle = async () => {
		const googleData = await signInWithPopup(auth, provider);
		const data = GoogleAuthProvider.credentialFromResult(googleData);
		console.log(googleData)
	}
	return (
		<div>
			<Button
				type="primary"
				onClick={signInWithGoogle}
			>
				Sign in Google
			</Button>
		</div>
	)
};

export default Google;