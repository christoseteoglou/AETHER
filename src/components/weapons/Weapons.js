import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TOKEN = 'xxxxx';
const URL =
	'https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018488507597/Item/6917529532420804684/?components=304';

const imgURL = 'https://www.bungie.net';

const Weapons = () => {
	const headers = { 'X-API-KEY': TOKEN };

	const [ weapons, setWeapons ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	const getWeapons = async () => {
		try {
			const res = await axios.get(URL, { headers });
			console.log(res);
			let data = res.data.Response.stats.data.stats;
			setWeapons(data);
			setLoading(true);
		} catch (err) {
			console.log(err.message);
		}
	};
	useEffect(() => {
		getWeapons();
	}, []);

	return (
		<div>
			<h2>Weapons</h2>
			<ul>{loading && weapons.map((weapons) => <li>{weapons.stats}</li>)}</ul>
		</div>
	);
};

export default Weapons;
