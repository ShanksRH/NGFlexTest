import _ from 'lodash';
import React from 'react';
import {
	App,
	Avatar,
	Buttons,
	CharCard,
	ExportChar,
	Header,
	ImportChar,
	Name,
	Parameters,
	Skills
} from '../../components/App';
import {Block} from '../../components/common';
import {recalculateCharacter} from '../../helpers';

const defaultParamValue = 0;

const character = {
	name: 'Panda',
	basics: {
		agility: defaultParamValue,
		charisma: defaultParamValue,
		intellect: defaultParamValue,
		strength: defaultParamValue
	}
};

recalculateCharacter(character);
console.log({character})

class AppWrapper extends React.Component {
	state = {
		character,
		editing: false,
		editingCharacter: {...character}
	}

	updateCharacter = (param, value, needRecalculation) => {
		this.setState((prevState) => {
			const newState = {...prevState};

			_.set(newState, `editingCharacter.${param}`, value);

			if (needRecalculation) {
				recalculateCharacter(newState.editingCharacter);
			}

			return newState;
		})
	}

	onCancelClick = () => {
		this.setState({editing: false});
	}

	onEditClick = () => {
		this.setState((prevState) => ({
			editing: true,
			editingCharacter: {...prevState.character}
		}));
	}

	onNameChange = (value) => {
		this.updateCharacter('name', value);
	}

	onParameterChange = (parameter, value) => {
		this.updateCharacter(parameter, value, true);
	}

	onSkillChange = (parameter, value) => {
		this.updateCharacter(`skills.${parameter}`, value, true);
	}

	onSaveClick = () => {
		this.setState((prevState) => ({
			character: {...prevState.editingCharacter},
			editing: false
		}));
	}

	render() {
		return (
			<App>
				<Header>
					Редактор персонажа
				</Header>
				<main>
				<CharCard>
					<Block direction="row">
						<Name
							editing={this.state.editing}
							name={this.state.character.name}
							onChange={this.onNameChange}
						/>
						<Buttons
							editing={this.state.editing}
							onCancelClick={this.onCancelClick}
							onEditClick={this.onEditClick}
							onSaveClick={this.onSaveClick}
						/>
					</Block>
					<Block direction="row">
						<Avatar src="/Pandaman.jpg" />
						<Parameters
							additionals={this.state.character.additionals}
							basics={this.state.character.basics}
							editing={this.state.editing}
							onChange={this.onParameterChange}
						/>
					</Block>
					<Skills
						{...this.state.character.skills}
						editing={this.state.editing}
						onChange={this.onSkillChange}
					/>
				</CharCard>
				<ImportChar />
				<ExportChar />
				</main>
			</App>
		);
	}
}

export default AppWrapper;
