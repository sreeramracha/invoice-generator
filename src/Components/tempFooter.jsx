export default function Footer() {
	return (
		<>
			<div className="footer-amount">
				<div className="price-words">
					<p>
						TOTAL AMOUNT (IN WORDS){" "}
						<textarea name="" id=""></textarea>
					</p>
				</div>
				<div className="tax">
					<p>
						TOTAL AMOUNT BEFORE TAX <input type="text" />
					</p>
					<p>
						CGST <input type="text" />
						%
						<input type="text" />
					</p>
				</div>
			</div>

			<div className="footer-account-details-tax">
				<div className="account-details">
					<p>Account no. : 924020041898988</p>
					<p>IFSC: UTIB0000193</p>
					<p>Kukatpally Branch</p>
				</div>
				<div className="total-tax">
					<p>
						SGST <input type="text" />
						%
						<input type="text" />
					</p>
					<p>
						IGST <input type="text" />
						%
						<input type="text" />
					</p>
					<p>
						TOTAL AMOUNT <input type="text" />
						%
						<input type="text" />
					</p>
				</div>
			</div>

			<div className="footer-end-details">
				<div className="terms">
					<p>
						Transport Mode: <input type="text" />
					</p>
					<p>
						Vehicle Number: <input type="text" />
					</p>
					<p>
						Date of Supply: <input type="text" />
					</p>
					<p>Goods once sold will not be taken Back or Exchanged</p>
				</div>
				<div className="signature">
					<p>For M/S. TEJASWINI SALES CORPORATION</p>
					<p>Auth. Signatory</p>
				</div>
			</div>
		</>
	);
}
