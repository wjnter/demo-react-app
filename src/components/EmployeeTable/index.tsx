import React, { useState, useEffect } from "react";
import { Table, Row, Col } from "antd";
import axios from "axios";

import { Employee } from "../../common/types";
import AddEmployee from "../AddEmployee";

const EmployeeTable = () => {
	const initData: Employee[] = [];
	const [data, setData] = useState(initData);
	const [loading, setLoading] = useState(true);
	const getEmployee = (employee: Employee) => {
		const newData = [...data];
		newData.push(employee);

		setData(newData);
	};

	useEffect(() => {
		(async () => {
			const response = await axios.get(
				"https://610a0dcad71b670017639b71.mockapi.io/api/employees"
			);
			if (response.status === 200) {
				setData(response.data);
				setLoading(false);
			}
		})();
	}, []);
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Position",
			dataIndex: "position",
			key: "position",
		},
	];

	return (
		<div style={{ marginTop: 20 }}>
			<h2 className="text-center">Employee Table</h2>
			<Row justify="space-around">
				<Col md={{ span: 20 }} lg={{ span: 7 }}>
					<AddEmployee getEmployee={getEmployee} />
				</Col>
				<Col md={{ span: 24 }} lg={{ span: 16 }}>
					<Table
						loading={loading}
						columns={columns}
						dataSource={data}
						pagination={{ position: ["bottomCenter"], pageSize: 5 }}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default EmployeeTable;
