import React from 'react';
import Name from './Name';
import Points from './Points';
import Skill from './Skill';

function Skills({name, points, type}) {
	return (
		<Skill type={type}>
			<Name>{name}:</Name>
			<Points>{points}</Points>
		</Skill>
	);
}

export default Skills;
