import {getDownloadURL, getStorage, listAll, ref, uploadBytesResumable} from 'firebase/storage';
import {useEffect, useState} from "react";

import {storage} from '../../../config';

const UploadFile = () => {
	const [file, setFile] = useState("");
	const [percent, setPercent] = useState(0);

	const storageFile = getStorage();
	const listRef = ref(storageFile, 'files/');

	const handleUploadFile = () => {
		const storageRef = ref(storage, `/files/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const percent = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setPercent(percent);
			},
			(error) => console.log(error),
			async () => {
				const url = await getDownloadURL(uploadTask.snapshot.ref);
				console.log(url);
			}
		)
	};

	useEffect(() => {
		(async () => {
			const dataFiles = await listAll(listRef);
			dataFiles.items.forEach((file) => {
				console.log(file.fullPath)
			});
		})()
	}, []);

	return (
		<div>
			<div>
				<input
					type="file"
					accept="image/*"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<button
					onClick={handleUploadFile}
				>
					Upload to Firebase
				</button>
				<p>{percent} "% done"</p>
			</div>
		</div>
	)
};

export default UploadFile;