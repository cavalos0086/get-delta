import React from 'react';
import REACTDOM from 'react-dom';
import './index.css';

import Coverage from './components/coverage';

export default class App extends React.Component {
	render() {
		return (
			<div className="container-fluid px-0">
				<div className="jumbotron">
					<h3>Coverage</h3>
				</div>
				<div className="row">
					<div className="col-10 mx-auto">
						<h3 className="text-center">DEV branch</h3>
						<Coverage branch="dev"/>
						<h3 className="text-center">YOUR branch</h3>
						<Coverage branch="your"/>
						<button className="float-right btn btn-info">Generate Delta</button>
					</div>
				</div>
			</div>
		);
	}
}