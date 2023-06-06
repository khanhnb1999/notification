import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useEffect} from "react";

const Auth = () => {
	const auth = getAuth();
	console.log(auth.currentUser)

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			// console.log(user)
		});
	}, []);

	return (
		<div>

		</div>
	)
};

export default Auth;
