import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TOKEN = 'xxx';
const URL = 'https://www.bungie.net/Platform/Destiny/Advisors/Xur/';

function Xur() {
	const headers = { 'X-API-KEY': TOKEN };
	const [ xur, setXur ] = useState('');

	const getXur = () => {
		axios.get(URL, { headers }).then((response) => {
			console.log(response);
			const myXur = response.data.Response.data;
			setXur(myXur);
		});
	};

	useEffect(() => {
		getXur();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<p>AETHER</p>
				<p>XUR</p>
				<p> Next Refresh : {xur.nextRefreshDate} </p>
				{xur.saleItemCategories.map(({ categoryTitle }) => <p>{categoryTitle}</p>)}
			</header>
		</div>
	);
}

export default Xur;
