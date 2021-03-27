import styled from 'styled-components';

function getColor({type}) {
	if (type === 'Agility') return 'red';
	if (type === 'Charisma') return 'red';
	if (type === 'Intellect') return 'red';
	return 'red';
}

export default styled.div`
	background-color: ${getColor};
`;
