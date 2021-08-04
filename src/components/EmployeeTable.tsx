import React from "react";
import { Table, Tag, Space, Button } from "antd";
import { Employee } from "../common/types";

type Props = {
	data: Employee[];
};

const EmployeeTable = (props: Props) => {
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
		// {
		// 	title: "Tags",
		// 	key: "tags",
		// 	dataIndex: "tags",
		// 	render: (tags: string[]) => (
		// 		<>
		// 			{tags.map((tag: string) => {
		// 				let color = tag.length > 5 ? "geekblue" : "green";
		// 				if (tag === "loser") {
		// 					color = "volcano";
		// 				}
		// 				return (
		// 					<Tag color={color} key={tag}>
		// 						{tag.toUpperCase()}
		// 					</Tag>
		// 				);
		// 			})}
		// 		</>
		// 	),
		// },
	];

	return (
		<div>
			<Table
				columns={columns}
				dataSource={props.data}
				pagination={{ position: ["bottomCenter"], pageSize: 5 }}
			/>
		</div>
	);
};

export default EmployeeTable;
