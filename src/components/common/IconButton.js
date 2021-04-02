import styled from 'styled-components';
import Button from './Button';

export default styled(Button)`
	background: center / calc(100% - 4px) url(/icons/${({icon}) => icon}.png) no-repeat;
`;
