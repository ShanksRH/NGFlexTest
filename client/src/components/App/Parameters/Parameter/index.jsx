import React from 'react';
import Container from './Container';
import Input from './Input';
import Name from './Name';
import Points from './Points';

class Parameter extends React.Component {
	onChange = ({target}) => {
		this.props.onChange(Number(target.value));
	}

	render() {
		const {name, points, type, editing} = this.props;

		return (
			<Container type={type}>
				<Name>{name}:</Name>
				{
					editing ? (
						<Input
							defaultValue={points}
							maxLength={2}
							onChange={this.onChange}
						/>
					) : (
						<Points>{points}</Points>
					)
				}
			</Container>
		);
	}
}

export default Parameter;
