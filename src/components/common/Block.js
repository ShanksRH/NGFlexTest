import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex: 1;
	flex-direction: ${({direction}) => direction};
	flex-wrap: wrap;
`;
