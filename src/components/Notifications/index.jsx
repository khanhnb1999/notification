import {LoadingOutlined} from '@ant-design/icons';
import {notification, Table} from 'antd';
import {collection, doc, getDocs, query, updateDoc} from "firebase/firestore";
import {useEffect, useState} from 'react';
import {firestoreConfig} from '../../../config';

import {onMessageListener, Sendrequest} from '../../firebase';

const Notification = () => {
	const antIcon = <LoadingOutlined style={{fontSize: 24}} spin />;
	const [notifications, setNotifications] = useState({title: '', body: ''});
	const [api, contextHolder] = notification.useNotification();
	const [streams, setStreams] = useState([]);
	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			ellipsis: true,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
		},
	]

	let updateItem = async () => {
		const updateData = {
			price: 555000
		}
		const item = await updateDoc(
			doc(
				firestoreConfig, 'items', 'nYSM3bLLDfyFo2P8Z0LU'
			),
			updateData
		);
	}

	const fetchPost = async () => {
		let docStreams = [];
		const dataUser = await getDocs(
			query((
				collection(
					firestoreConfig, "streams"
				))
			));
		dataUser.docs.map((doc) => docStreams.push(doc.data()));
		setStreams(docStreams)
	}

	useEffect(() => {
		fetchPost();
		updateItem();
	}, [])

	useEffect(() => {
		(async () => {
			const payload = await onMessageListener();
			if (payload) {
				setNotifications({
					title: payload?.notification?.title,
					body: payload?.notification?.body
				});
			}
		})();

		if (notifications?.title) {
			api['success']({
				message: notifications?.title,
				description: notifications?.body
			});
		}
		Sendrequest();
	}, [notifications]);
	console.log(notifications);

	return (
		<div>
			<div>
				{contextHolder}
			</div>
			<div className='p-5'>
				<Table
					columns={columns}
					dataSource={streams}
					rowKey="id"
				/>
			</div>
		</div>
	)
}

export default Notification