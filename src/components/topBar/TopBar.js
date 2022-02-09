import React, { useEffect, useState } from 'react';
import '../../App.css';
import './TopBar.css';
import axios from 'axios';

const TOKEN = 'xxxxx';
const URL =
	'https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018488507597/Character/2305843009655404243/?components=200';

const imgURL = 'https://www.bungie.net';

const img = 'https://www.bungie.net/common/destiny2_content/icons/a44fb0cf2bd58f8789d59b5e8a6cb2ce.jpg';

function TopBar() {
	const headers = { 'X-API-KEY': TOKEN };
	const [ character, setCharacter ] = useState('');

	const getCharacter = async () => {
		try {
			const resp = await axios.get(URL, { headers });
			console.log(resp.data);

			const myCharacter = resp.data.Response.character.data;
			setCharacter(myCharacter);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getCharacter();
	}, []);

	return (
		<div>
			<img className="titlebar" src={img} />
			<h2> {character.baseCharacterLevel} </h2>
		</div>
	);
}

export default TopBar;
