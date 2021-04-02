import _ from "lodash";
import {skills} from './constants';

function calculateEnergy({agility, intellect}) {
	return agility + intellect;
}

function calculateEvasion({agility}) {
	return 10 + agility;
}

function calculateVitality({strength}) {
	return 3 + strength;
}

function calculateAdditionals(basics) {
	return {
		energy: calculateEnergy(basics),
		evasion: calculateEvasion(basics),
		vitality: calculateVitality(basics)
	};
}

function calculateSkills(basics, prevSkills) {
	return _.mapValues(
		skills,
		(specificTypeSkills, type) => _.mapValues(
			specificTypeSkills,
			(name, skill) => _.min([
				_.get(prevSkills, [type, skill], 0),
				basics[type]
			])
		)
	);
}

export function recalculateCharacter(character) {
	character.additionals = calculateAdditionals(character.basics);
	character.skills = calculateSkills(character.basics, character.skills);
}
