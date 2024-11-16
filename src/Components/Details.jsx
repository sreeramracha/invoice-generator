import { useState } from "react";

export default function Details() {
	const [invoiceDate, setInvoiceDate] = useState("");
	const [reverseCharge, setReverseCharge] = useState("");

	function handleInvoiceDate(event) {
		setInvoiceDate(event.target.value);
	}

	function handleReverseCharge(event) {
		setReverseCharge(event.target.value);
	}

	return (
		<>
			<div className="details-section">
				<div className="details-header">
					<p>TAX INVOICE</p>
				</div>
				<div className="details-invoice">
					<div className="left">
						<p>INVOICE NO.</p>
					</div>
					<div className="right">
						<div className="right-first-key">
							<p>INVOICE DATE</p>
							<input
								type="text"
								value={invoiceDate}
								onChange={handleInvoiceDate}
							/>
						</div>
						<div className="right-second-key">
							<p>REVERSE CHARGE</p>
							<input
								type="text"
								value={reverseCharge}
								onChange={handleReverseCharge}
							/>
						</div>
					</div>
				</div>

				<div className="details-consignee">
					<div className="left">
						<p>Details of Consignee : (Billed to)</p>
						<p>
							Name <input type="text" />
						</p>
						<p>
							Address <textarea name="" id=""></textarea>
						</p>

						<p>
							<span>
								State
								<input type="text" />
							</span>
							<span>
								State Code <input type="text" />
							</span>
						</p>
						<p>
							GSTIN :<input type="text" />
						</p>
					</div>
					<div className="right">
						<p>Details of Consignee : (Shipped to)</p>
						<p>
							Name <input type="text" />
						</p>
						<p>
							Address <textarea name="" id=""></textarea>
						</p>

						<p>
							<span>
								State
								<input type="text" />
							</span>
							<span>
								State Code <input type="text" />
							</span>
						</p>
						<p>
							GSTIN :<input type="text" />
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
