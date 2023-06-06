import {getToken, onMessage} from 'firebase/messaging';
import {messaging} from '../../config';

export const Sendrequest = async () => {
	console.log("Requesting User Permission......");

	const permission = await Notification.requestPermission();
	// Người dùng cho phép hiện thị thông báo hệ thống khi được hỏi.

	if (permission === 'granted') {
		const tokenDevice = await getToken(
			messaging,
			{
				vapidKey: 'BNgQUVYZAFetnMPUPlZLBZvWfq3q8kXxFofw8AlZT2UhWZ_UshGrtrXw-w7PkJbv5aHWlWbOQDH3n0i8K9J80gk'
			}
		);

		if (tokenDevice) {
			console.log('Client Token Device: ', tokenDevice);
		} else {
			console.log('Failed to generate the registration token.');
		}
	}
}

export const onMessageListener = () =>
	new Promise((resolve) => {
		onMessage(messaging, (payload) => {
			resolve(payload);
		});
	});
