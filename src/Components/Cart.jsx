import { useState } from "react";

export default function Cart() {
	// const [serialNumber, setSerialNumber] = useState();
	// const [description, setDescription] = useState();
	// const [hsnCode, setHsnCode] = useState();
	// const [quantity, setQuantity] = useState();
	// const [rate, setRate] = useState();
	// const [taxabaleValue, setTaxableValue] = useState();

	const [rows, setRows] = useState([
		{
			serialNumber: null,
			description: null,
			hsnCode: null,
			quantity: null,
			rate: null,
			taxableValue: null,
		},
	]);

	function handleRows(index, name, value) {
		const updatedRows = [...rows];

		if (name === "serialNumber") {
			// setSerialNumber(Number(value));
			updatedRows[index].name = Number(value);
		} else if (name === "description") {
			// setDescription(value);
			updatedRows[index].name = value;
		} else if (name === "hsnCode") {
			// setHsnCode(value);
			updatedRows[index].name = value;
		} else if (name === "quantity") {
			// setQuantity(Number(value));
			updatedRows[index].name = Number(value);
		} else if (name === "rate") {
			// setRate(parseFloat(value));
			updatedRows[index].name = parseFloat(value);
		} else if (name === "taxableValue") {
			// setTaxableValue(parseFloat(value));
			updatedRows[index].name = parseFloat(value);
		}

		if (index === rows.length - 1) {
			updatedRows.push({
				serialNumber: "",
				description: "",
				hsnCode: "",
				quantity: "",
				rate: "",
				taxableValue: "",
			});
		}
		setRows(updatedRows);
	}

	return (
		<>
			<div className="cart-details">
				<table>
					<thead>
						<tr>
							<th>S. No.</th>
							<th>DESCRIPTION</th>
							<th>HSN CODE</th>
							<th>Quantity</th>
							<th>RATE</th>
							<th>TAXABLE VALUE</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((item, index) => {
							return (
								<tr key={index}>
									<td>
										<input
											type="text"
											value={item.serialnumber}
											onChange={(e) =>
												handleRows(
													index,
													"serialNumber",
													e.target.value
												)
											}
										/>
									</td>
									<td>
										<input
											type="text"
											value={item.description}
											onChange={(e) =>
												handleRows(
													index,
													"description",
													e.target.value
												)
											}
										/>
									</td>
									<td>
										<input
											type="text"
											value={item.hsncode}
											onChange={(e) =>
												handleRows(
													index,
													"hsnCode",
													e.target.value
												)
											}
										/>
									</td>
									<td>
										<input
											type="text"
											value={item.quantity}
											onChange={(e) =>
												handleRows(
													index,
													"quantity",
													e.target.value
												)
											}
										/>
									</td>
									<td>
										<input
											type="text"
											value={item.rate}
											onChange={(e) =>
												handleRows(
													index,
													"rate",
													e.target.value
												)
											}
										/>
									</td>
									<td>
										<input
											type="text"
											value={item.taxablevalue}
											onChange={(e) =>
												handleRows(
													index,
													"taxableValue",
													e.target.value
												)
											}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}
