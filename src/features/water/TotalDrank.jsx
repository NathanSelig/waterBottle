import React, { useState, useEffect } from "react";
import { VolumeUnit, convertUnits } from "measurement-unit-converter";

const NAMES = {
	Oz: VolumeUnit.FLUID_OUNCE_US,
	ml: VolumeUnit.MILLILITER,
	l: VolumeUnit.LITER,
};

export default function TotalDrank({ logs, unit }) {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let calculatedTotal = 0;
		logs.forEach((log) => {
			const currentUnit = NAMES[log.unit];
			const newUnit = NAMES[unit];
			const convertedAmount = convertUnits(log.amount, NAMES[currentUnit], NAMES[newUnit]);
			calculatedTotal += convertedAmount;
		});
		setTotal(calculatedTotal);
	}, [logs, unit]);

	return (
		<div>
			<h2>Total drank</h2>
			<p>
				{total} {unit}
			</p>
		</div>
	);
}
