import React from 'react';
import Skill from './Skill';

function Skills({skills, ...props}) {
	return skills && skills.map((skill) => (
		<Skill key={skill.name} {...skill} {...props} />
	));
}

export default Skills;
