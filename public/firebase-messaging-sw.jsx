importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
	apiKey: "AIzaSyB9vsf0A1rNPSP744nNdkd7w_vD0IUm9n0",
	authDomain: "ornate-casing-381202.firebaseapp.com",
	databaseURL: "https://ornate-casing-381202-default-rtdb.firebaseio.com",
	projectId: "ornate-casing-381202",
	storageBucket: "ornate-casing-381202.appspot.com",
	messagingSenderId: "711287601862",
	appId: "1:711287601862:web:50f7f4bc38bc486b1875c7"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log('Received background message ', payload);
	// Customize notification here
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
	};

	self.registration.showNotification(notificationTitle,
		notificationOptions);
});