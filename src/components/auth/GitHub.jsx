import {Button} from 'antd';
import {getAuth, GithubAuthProvider, signInWithPopup} from 'firebase/auth';

const GitHub = () => {
	const auth = getAuth();
	const provider = new GithubAuthProvider();
	provider.setCustomParameters({
		'allow_signup': 'true'
	});

	const signInWithGithub = async () => {
		const dataGithub = await signInWithPopup(auth, provider);
		console.log(dataGithub);
	}

	return (
		<>
			<Button
				type="primary"
				onClick={signInWithGithub}
			>
				Sign in Github
			</Button>
		</>
	)
};

export default GitHub;