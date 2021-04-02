import React from 'react';
import Container from './Container';
import Input from './Input';
import Name from './Name';
import Points from './Points';
import {skillLevels} from '../../../../constants';

class Skill extends React.Component {
	onChange = ({target}) => {
		this.props.onChange(Number(target.value));
	}

	render() {
		const {name, level, type, editing} = this.props;

		return (
			<Container type={type}>
				<Name>{name}:</Name>
				{
					editing ? (
						<Input
							defaultValue={level}
							maxLength={2}
							onChange={this.onChange}
						/>
					) : (
						<Points>{skillLevels[level]}</Points>
					)
				}
			</Container>
		);
	}
}

export default Skill;
