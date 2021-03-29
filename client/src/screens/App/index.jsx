import React from 'react';
import {
	App,
	Avatar,
	CharCard,
	ExportChar,
	Header,
	ImportChar,
	Name,
	Skills
} from '../../components/App';
import {Block, Label} from '../../components/common';

const basicStats = [
	{name: 'Сила', points: 1, type: 'strength'},
	{name: 'Ловкость', points: 1, type: 'agility'},
	{name: 'Интеллект', points: 1, type: 'intellect'},
	{name: 'Харизма', points: 1, type: 'charisma'}
];

const otherStats = [
	{name: 'Жизненная сила', points: 1, type: 'strength'},
	{name: 'Уклонение', points: 1, type: 'agility'},
	{name: 'Энергичность', points: 1, type: 'intellect'}
];


const skills = {
	agility: [
		{name: 'Стелс', points: 1, type: 'agility'},
		{name: 'Стрельба из лука', points: 1, type: 'agility'}
	],
	charisma: [
		{name: 'Запугивание', points: 1, type: 'charisma'},
		{name: 'Проницательность', points: 1, type: 'charisma'},
		{name: 'Внешний вид', points: 1, type: 'charisma'},
		{name: 'Манипулирование', points: 1, type: 'charisma'}
	],
	intellect: [
		{name: 'Обучаемость', points: 1, type: 'intellect'},
		{name: 'Выживание', points: 1, type: 'intellect'},
		{name: 'Медицина', points: 1, type: 'intellect'}
	],
	strength: [{name: 'Атака', points: 1, type: 'strength'}]
}

class AppWrapper extends React.Component {
	state = {
		editing: false,
		name: 'Panda'
	}

	onCancelClick = () => {
		this.setState({editing: false});
	}

	onEditClick = () => {
		this.setState({editing: true});
	}

	onSaveClick = () => {
		this.setState({editing: false});
	}

	render() {
		return (
			<App>
				<Header>
					Редактор персонажа
				</Header>
				<main>
				<CharCard>
					<Name
						editing={this.state.editing}
						name={this.state.name}
						onCancelClick={this.onCancelClick}
						onEditClick={this.onEditClick}
						onSaveClick={this.onSaveClick}
					/>
					<Block direction="row">
						<Avatar src="/Pandaman.jpg" />
						<Block direction="column">
							<Block direction="column">
								<Label>Базовые параметры:</Label>
								<Skills skills={basicStats} />
							</Block>
							<Block direction="column">
								<Label>Дополнительные параметры:</Label>
								<Skills skills={otherStats} />
							</Block>
						</Block>
					</Block>
					<Label>Навыки:</Label>
					<Block direction="row">
						<Block direction="column">
							<Skills skills={skills.strength} />
							<Skills skills={skills.charisma} />
						</Block>
						<Block direction="column">
							<Skills skills={skills.agility} />
							<Skills skills={skills.intellect} />
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
