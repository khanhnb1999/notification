
import {initializeApp} from 'firebase/app';
import {getMessaging, getToken, onMessage} from 'firebase/messaging';

var firebaseConfig = {
	apiKey: "AIzaSyB9vsf0A1rNPSP744nNdkd7w_vD0IUm9n0",
	authDomain: "ornate-casing-381202.firebaseapp.com",
	databaseURL: "https://ornate-casing-381202-default-rtdb.firebaseio.com",
	projectId: "ornate-casing-381202",
	storageBucket: "ornate-casing-381202.appspot.com",
	messagingSenderId: "711287601862",
	appId: "1:711287601862:web:50f7f4bc38bc486b1875c7"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
	return getToken(messaging, {vapidKey: `REPLACE_WITH_YOUR_VAPID_KEY`})
		.then((currentToken) => {
			if (currentToken) {
				console.log('current token for client: ', currentToken);
				// Perform any other neccessary action with the token
			} else {
				// Show permission request UI
				console.log('No registration token available. Request permission to generate one.');
			}
		})
		.catch((err) => {
			console.log('An error occurred while retrieving token. ', err);
		});
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
	new Promise((resolve) => {
		onMessage(messaging, (payload) => {
			resolve(payload);
		});
	});