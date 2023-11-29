import React, { useState, useEffect } from "react";
import { volume } from "units-converter";

export default function TotalDrank({ logs, unit }) {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let calculatedTotal = 0;
		logs.forEach((log) => {
			const convertedAmount = volume(Number(log.waterAmount)).from(log.unit).to(unit).value;
			calculatedTotal += convertedAmount;
		});
		setTotal(calculatedTotal);
	}, [logs, unit]);

	return (
		<div>
			<h2>Total drank</h2>
			<p>
				{total.toFixed(1)} {unit}
			</p>
		</div>
	);
}
