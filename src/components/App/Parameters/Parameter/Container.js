import styled from 'styled-components';
import {colors} from '../../../../constants';

function getColor({type}) {
	return colors[type];
}

export default styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px 10px;
	background-color: ${getColor};
`;
