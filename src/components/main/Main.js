import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../main/Main.css';

const TOKEN = 'xxx';
const URL = 'https://www.bungie.net/Platform/User/GetBungieNetUserById/19106960/';

function Main() {
	const headers = { 'X-API-KEY': TOKEN };
	const [ player, setPlayer ] = useState('');

	const getPlayer = () => {
		axios.get(URL, { headers }).then((response) => {
			console.log(response);
			const myPlayer = response.data.Response;
			setPlayer(myPlayer);
		});
	};

	useEffect(() => {
		getPlayer();
	}, []);

	return (
		<div className="App navBar">
			<div className="navBar">
				<h5>AETHER | A PERSONAL PROJECT</h5>
			</div>
			<header className="App-header">
				<p>AETHER</p>
				<p> Display name: {player.displayName} </p>
				<p> MemberID: {player.membershipId} </p>
				<p> Player uniqueName: {player.uniqueName} </p>
			</header>
		</div>
	);
}

export default Main;
