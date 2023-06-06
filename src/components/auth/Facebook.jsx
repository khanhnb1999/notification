import {Button} from "antd";
import {FacebookAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from "../../../config";

function FaceBook() {
	const signInWithFacebook = () => {
		const provider = new FacebookAuthProvider();

		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result)
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Button
				type="primary"
				onClick={signInWithFacebook}
			>
				Sign in Facebook
			</Button>
		</>
	)
};

export default FaceBook;