import React from 'react';
import Skill from './Skill';

function Skills({name, points, type}) {
	return (
		<Skill type={type}>
			{name}: {points}
		</Skill>
	);
}

export default Skills;
