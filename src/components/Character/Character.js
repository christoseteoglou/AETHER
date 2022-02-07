import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TOKEN = 'xxxx';
const URL =
	'https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018488507597/Character/2305843009655404243/?components=200';

function Character() {
	const headers = { 'X-API-KEY': TOKEN };
	const [ character, setCharacter ] = useState('');

	const getCharacter = () => {
		axios.get(URL, { headers }).then((response) => {
			console.log(response);

			const myCharacter = response.data.Response.character.data;
			setCharacter(myCharacter);
		});
	};

	useEffect(() => {
		getCharacter();
	}, []);

	return (
		<div className="App navBar">
			<div className="navBar">
				<h5>AETHER | A PERSONAL PROJECT</h5>
			</div>
			<header className="App-header">
				<p>
					{' '}
					Emblem:{' '}
					<img src="https://bungie.net/common/destiny2_content/icons/0713b2a53470dc731ac3ed96298d866f.jpg" />
					<img src="https://bungie.net/common/destiny2_content/icons/63d9d69e7c9a4ae3cbecad641ad7fa19.jpg" />{' '}
				</p>
				<p> PowerLevel: {character.light} </p>
				<p> Total min. played: {character.minutesPlayedTotal} </p>
			</header>
		</div>
	);
}

export default Character;
