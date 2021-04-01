import React from 'react';
import List from './List';
import {Block, Label} from '../../common';

function Skills({
	agility,
	charisma,
	intellect,
	strength,
	...props
}) {
	return (
		<Block direction="column">
			<Label>Навыки:</Label>
			<Block direction="row">
				<Block direction="column">
					<List skills={strength} type="strength" {...props} />
					<List skills={charisma} type="charisma" {...props} />
				</Block>
				<Block direction="column">
					<List skills={agility} type="agility" {...props} />
					<List skills={intellect} type="intellect" {...props} />
				</Block>
			</Block>
		</Block>
	);
}

export default Skills;
