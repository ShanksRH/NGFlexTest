import React from 'react';
import Container from './Container';
import Name from './Name';
import Points from './Points';
import Select from './Select';
import {skillLevels} from '../../../../constants';

class Skill extends React.Component {
	onChange = ({target}) => {
		this.props.onChange(target.selectedIndex);
	}

	render() {
		const {name, level, type, editing} = this.props;

		return (
			<Container type={type}>
				<Name>{name}:</Name>
				{
					editing ? (
						<Select
							defaultValue={skillLevels[level]}
							onChange={this.onChange}
						>
							{
								skillLevels.map((skillLevel) => (
									<option
										key={skillLevel}
										value={skillLevel}
									>
										{skillLevel}
									</option>
								))
							}
						</Select>
					) : (
						<Points>{skillLevels[level]}</Points>
					)
				}
			</Container>
		);
	}
}

export default Skill;
