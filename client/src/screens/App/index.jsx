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

class AppWrapper extends React.Component {
	state = {
		character,
		fileDownloadUrl: '',
		editing: false,
		editingCharacter: {...character}
	}

	openFile = ({target}) => {
		const fileObj = target.files[0];
		const reader = new FileReader();

		reader.onload = ({target}) => {
			this.setState({character: JSON.parse(target.result)})
		}

		reader.readAsText(fileObj);
	}

	editCharacter = (param, value, needRecalculation) => {
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
			editingCharacter: _.cloneDeep(prevState.character)
		}));
	}

	onExportClick = (event) => {
		event.preventDefault();

		const output = JSON.stringify(this.state.character, null, 2);
		const blob = new Blob([output]);
		const fileDownloadUrl = URL.createObjectURL(blob);

		this.setState (
			{fileDownloadUrl: fileDownloadUrl},
			() => {
				this.downloadFile.click();
				URL.revokeObjectURL(fileDownloadUrl);
				this.setState({fileDownloadUrl: ''})
			}
		);
	}

	onImportClick = (event) => {
		event.preventDefault();
	  	this.uploadFile.click();
	}

	onNameChange = (value) => {
		this.editCharacter('name', value);
	}

	onParameterChange = (parameter, value) => {
		this.editCharacter(parameter, value, true);
	}

	onSkillChange = (parameter, value) => {
		this.editCharacter(`skills.${parameter}`, value, true);
	}

	onSaveClick = () => {
		this.setState((prevState) => ({
			character: _.cloneDeep(prevState.editingCharacter),
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
				<ExportChar
					onClick={this.onExportClick}
					href={this.state.fileDownloadUrl}
					linkRef={(e) => this.downloadFile = e}

				/>
				<ImportChar
					onChange={this.openFile}
					onClick={this.onImportClick}
					inputRef={(e) => this.uploadFile = e}
				/>
				</main>
			</App>
		);
	}
}

export default AppWrapper;
