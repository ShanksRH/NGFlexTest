import React from 'react';
import {Agility, Block, Charisma, Intellect, Strength} from '../../common';

function BasicStats() {
	return (
		<Block direction="column">
			<Strength>Сила</Strength>
			<Agility>Ловкость</Agility>
			<Intellect>Интеллект</Intellect>
			<Charisma>Харизма</Charisma>
		</Block>
	);
}

export default BasicStats;
