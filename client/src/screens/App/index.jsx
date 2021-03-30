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
	Skills
} from '../../components/App';
import {Block, IconButton, Label} from '../../components/common';
import {restoreChar} from '../../helpers';

const defaultStatValue = 1;

const charBasicStats = {
	agility: defaultStatValue,
	charisma: defaultStatValue,
	intellect: defaultStatValue,
	strength: defaultStatValue
};

const charAllStats = restoreChar(charBasicStats);

const basicStats = [
	{name: 'Сила', points: charAllStats.strength, type: 'strength'},
	{name: 'Ловкость', points: charAllStats.agility, type: 'agility'},
	{name: 'Интеллект', points: charAllStats.intellect, type: 'intellect'},
	{name: 'Харизма', points: charAllStats.charisma, type: 'charisma'}
];

const otherStats = [
	{name: 'Жизненная сила', points: charAllStats.vitality, type: 'strength'},
	{name: 'Уклонение', points: charAllStats.evasion, type: 'agility'},
	{name: 'Энергичность', points: charAllStats.energy, type: 'intellect'}
];

const skills = {
	agility: [
		{name: 'Стелс', points: defaultStatValue, type: 'agility'},
		{name: 'Стрельба из лука', points: defaultStatValue, type: 'agility'}
	],
	charisma: [
		{name: 'Запугивание', points: defaultStatValue, type: 'charisma'},
		{name: 'Проницательность', points: defaultStatValue, type: 'charisma'},
		{name: 'Внешний вид', points: defaultStatValue, type: 'charisma'},
		{name: 'Манипулирование', points: defaultStatValue, type: 'charisma'}
	],
	intellect: [
		{name: 'Обучаемость', points: defaultStatValue, type: 'intellect'},
		{name: 'Выживание', points: defaultStatValue, type: 'intellect'},
		{name: 'Медицина', points: defaultStatValue, type: 'intellect'}
	],
	strength: [{name: 'Атака', points: defaultStatValue, type: 'strength'}]
}

const character = {
	basics: basicStats,
	additionals: otherStats,
	name: 'Panda',
	skills: {
		agility: skills.agility,
		charisma: skills.charisma,
		intellect: skills.intellect,
		strength: skills.strength
	}
};

class AppWrapper extends React.Component {
	state = {
		character,
		editing: false,
		editingCharacter: null
	}

	editCharacterParam = (param, value) => {
		this.setState((prevState) => {
			const newState = {...prevState};

			_.set(newState, ['editingCharacter', param], value);

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

	onParameterChange = (parameter, value) => {
		this.editCharacterParam(parameter, value);
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
							onChange={_.partial(this.onParameterChange, 'name')}
						/>
						<Buttons>
							{
								this.state.editing ? (
									<>
										<IconButton
											icon="save"
											title="Сохранить"
											onClick={this.onSaveClick}
										/>
										<IconButton
											icon="cancel"
											title="Отменить"
											onClick={this.onCancelClick}
										/>
									</>
								) : (
									<IconButton
										onClick={this.onEditClick}
										icon="edit"
										title="Редактировать"
									/>
								)
							}
						</Buttons>
					</Block>
					<Block direction="row">
						<Avatar src="/Pandaman.jpg" />
						<Block direction="column">
							<Block direction="column">
								<Label>Базовые параметры:</Label>
								<Skills
									skills={this.state.character.basics}
									editing={this.state.editing}
								/>
							</Block>
							<Block direction="column">
								<Label>Дополнительные параметры:</Label>
								<Skills skills={this.state.character.additionals} />
							</Block>
						</Block>
					</Block>
					<Label>Навыки:</Label>
					<Block direction="row">
						<Block direction="column">
							<Skills
								skills={this.state.character.skills.strength}
								editing={this.state.editing}
							/>
							<Skills
								skills={this.state.character.skills.charisma}
								editing={this.state.editing}
							/>
						</Block>
						<Block direction="column">
							<Skills
								skills={this.state.character.skills.agility}
								editing={this.state.editing}
							/>
							<Skills
								skills={this.state.character.skills.intellect}
								editing={this.state.editing}
							/>
						</Block>
					</Block>
				</CharCard>
				<ImportChar />
				<ExportChar />
				</main>
			</App>
		);
	}
}

export default AppWrapper;
