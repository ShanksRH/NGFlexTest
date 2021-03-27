import React from 'react';
import Skill from '../Skill';

function Skills({skills}) {
	return skills && skills.map(({name, points, type}) => (
		<Skill key={name} name={name} points={points} type={type} />
	));
}

export default Skills;
