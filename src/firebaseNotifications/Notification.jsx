import React, {useEffect, useState} from 'react';
import toast, {Toaster} from 'react-hot-toast';
import {onMessageListener, requestForToken} from './firebase';

const Notification = () => {
	const [notification, setNotification] = useState({title: '', body: ''});
	function ToastDisplay() {
		return (
			<div>
				<p><b>{notification?.title}</b></p>
				<p>{notification?.body}</p>
			</div>
		);
	};
	const notify = () => toast(<ToastDisplay />);

	useEffect(() => {
		if (notification?.title) {
			notify()
		}
	}, [notification])

	requestForToken();

	onMessageListener()
		.then((payload) => {
			setNotification({title: payload?.notification?.title, body: payload?.notification?.body});
		})
		.catch((err) => console.log('failed: ', err));

	return (
		<>
			<Toaster />
		</>
	)
}

export default Notification