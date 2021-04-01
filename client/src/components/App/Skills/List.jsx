import _ from 'lodash'
import React from 'react';
import Skill from './Skill';
import {skills as allSkills} from '../../../constants';

function List({skills, type, editing, onChange}) {
	const typeSkills = allSkills[type];

	return (
		<>
			{
				_.keys(typeSkills).map((skill, index) => (
					<Skill
						key={index}
						name={typeSkills[skill]}
						points={skills[skill]}
						type={type}
						editing={editing}
						onChange={(value) => onChange(`${type}.${skill}`, value)}
					/>
				))
			}
		</>
	);
}

export default List;
