import React from 'react';
import {Block, Label} from '../../common';
import Additionals from './Additionals';
import Basics from './Basics';

function Parameters({additionals, basics, ...props}) {
	return (
		<Block direction="column">
			<Block direction="column">
				<Label>Базовые параметры:</Label>
				<Basics params={basics} {...props} />
			</Block>
			<Block direction="column">
				<Label>Дополнительные параметры:</Label>
				<Additionals params={additionals} />
			</Block>
		</Block>
	);
}

export default Parameters;
