import React from 'react';

export default function coverageSummary(props) {
	return (
		<div className="col-10 my-4 mx-auto">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title text-center my-4">Coverage Summary</h5>
					<div className="table-reponsive">
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Percentage</th>
									<th scope="col">Lines</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Statements</th>
									<td>28%</td>
									<td>35%</td>
								</tr>
								<tr>
									<th scope="row">Branches</th>
									<td>28%</td>
									<td>35%</td>
								</tr>
								<tr>
									<th scope="row">Functions</th>
									<td>28%</td>
									<td>35%</td>
								</tr>
								<tr>
									<th scope="row">Lines</th>
									<td>28%</td>
									<td>35%</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<button className="btn btn-info float-right my-4">Copy to Clipboard</button>
		</div>
	);
}