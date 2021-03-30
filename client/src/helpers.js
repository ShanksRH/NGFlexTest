export function calculateEnergy({agility, intellect}) {
	return agility + intellect;
}

export function calculateEvasion({agility}) {
	return 10 + agility;
}

export function calculateVitality({strength}) {
	return 3 + strength;
}

export function restoreChar(basicParams) {
	return {
		...basicParams,
		energy: calculateEnergy(basicParams),
		evasion: calculateEvasion(basicParams),
		vitality: calculateVitality(basicParams)
	};
}
