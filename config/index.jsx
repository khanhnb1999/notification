import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getMessaging} from 'firebase/messaging';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
	apiKey: "AIzaSyB9vsf0A1rNPSP744nNdkd7w_vD0IUm9n0",
  authDomain: "ornate-casing-381202.firebaseapp.com",
  databaseURL: "https://ornate-casing-381202-default-rtdb.firebaseio.com",
  projectId: "ornate-casing-381202",
  storageBucket: "ornate-casing-381202.appspot.com",
  messagingSenderId: "711287601862",
  appId: "1:711287601862:web:50f7f4bc38bc486b1875c7"
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
const firestoreConfig = getFirestore(firebaseApp);
const messaging = getMessaging(firebaseApp);
const auth = getAuth(firebaseApp);

export {firebaseApp, storage, firestoreConfig, messaging, auth};

