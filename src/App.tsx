import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import "./App.css";

import AddEmployee from "./components/AddEmployee";
import Counter from "./components/Counter";
import EmployeeTable from "./components/EmployeeTable";
import { Employee } from "./common/types";
import axios from "axios";

const App = () => {
	const initData: Employee[] = [];
	const [data, setData] = useState(initData);
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
				console.log(response.data);
				setData(response.data);
			}
		})();
	}, []);

	return (
		<div>
			<h1>Sample React</h1>
			<h2>Counter</h2>
			<Counter />
			<h2>Employee Table</h2>
			<Row justify="space-around">
				<Col span={7}>
					<AddEmployee getEmployee={getEmployee} />
				</Col>
				<Col span={16}>
					<EmployeeTable data={data} />
				</Col>
			</Row>
		</div>
	);
};

export default App;
