import React from 'react';
import Container from './Container';
import Input from './Input';
import Text from './Text';

class Name extends React.Component {
	onChange = ({target}) => {
		this.props.onChange(target.value);
	}

	render() {
		return  (
			<Container>
				{
					this.props.editing ? (
						<Input defaultValue={this.props.name} onChange={this.onChange} />
					) : (
						<Text>{this.props.name}</Text>
					)
				}
			</Container>
		);
	}
}

export default Name;
