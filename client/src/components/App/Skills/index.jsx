import React from 'react';
import Skill from '../Skill';
import {Block} from '../../common';

function Skills({skills}) {
	return (
		<Block direction="column">
			{
				skills && skills.map(
					({name, points, type}) => <Skill key={name} name={name} points={points} type={type} />
				)
			}
		</Block>
	);
}

export default Skills;
