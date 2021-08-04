import React from "react";
import { Button, Form, Input, Row } from "antd";
import { v4 as uuidv4 } from "uuid";

import { Employee } from "../../common/types";

type Props = {
	getEmployee: (employee: Employee) => void;
};

const AddEmployee = (props: Props) => {
	const message = "Please input this field!";
	const [form] = Form.useForm();

	const onFinish = (value: Employee) => {
		const newEmployee = {
			...value,
			key: uuidv4(),
		};
		props.getEmployee(newEmployee);
		form.resetFields();
	};
	const resetForm = () => {
		form.resetFields();
	};
	return (
		<>
			<h3 style={{ textAlign: "center" }}>Add New Employee</h3>
			<Form
				form={form}
				layout="horizontal"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={onFinish}
			>
				<Form.Item
					label="Name"
					name="name"
					rules={[{ required: true, message }]}
				>
					<Input type="text" />
				</Form.Item>
				<Form.Item
					label="Email"
					name="email"
					rules={[{ required: true, message }]}
				>
					<Input type="email" />
				</Form.Item>
				<Form.Item
					label="Position"
					name="position"
					rules={[{ required: true, message }]}
				>
					<Input type="text" />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Row justify="end">
						<Button type="primary" danger onClick={resetForm}>
							Clear
						</Button>
						<Button style={{ marginLeft: 10 }} htmlType="submit" type="primary">
							Add
						</Button>
					</Row>
				</Form.Item>
			</Form>
		</>
	);
};

export default AddEmployee;
