import {Button, Form, Input} from 'antd';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const SignIn = () => {
	const auth = getAuth();
	const onFinish = async (data) => {
		const userLogin = await signInWithEmailAndPassword(
			auth,
			data.email,
			data.password
		)
		console.log('Success:', userLogin);
	};
	return (
		<div className='mt-5 d-flex justify-content-center'>
			<div className='w-50'>
				<Form
					name="basic"
					labelCol={{span: 8}}
					wrapperCol={{span: 16}}
					style={{maxWidth: 600}}
					onFinish={onFinish}
					autoComplete="off"
				>
					<Form.Item label="Email" name="email">
						<Input />
					</Form.Item>

					<Form.Item label="Password" name="password" >
						<Input.Password />
					</Form.Item>

					<Form.Item wrapperCol={{offset: 8, span: 16}} >
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
};

export default SignIn;