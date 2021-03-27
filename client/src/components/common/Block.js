import styled from 'styled-components';

export default styled.div`
	display: flex;
	padding: 10px;
	border: 1px solid black;
	border-radius: 2px;
	flex-direction: ${({direction}) => direction};
`;
