import React from 'react';
import Input from './Input';
import Name from './Name';
import Points from './Points';
import Skill from './Skill';

function Skills({name, points, type, editing}) {
	return (
		<Skill type={type}>
			<Name>{name}:</Name>
			{
				editing ? (
					<Input defaultValue={points} maxLength={2} />
				) : (
					<Points>{points}</Points>
				)
			}
		</Skill>
	);
}

export default Skills;
