import './App.css';
import {
	Avatar,
	BasicStats,
	ExportChar,
	ImportChar,
	Name,
	OtherStats,
	Skills
} from '../../components/App';
import {Agility, Block, Charisma, Intellect, Strength} from '../../components/common';

const skills = {
	agility: [
		{name: 'Стелс', points: 1, type: 'Agility'},
		{name: 'Стрельба из лука', points: 1}
	],
	charisma: [
		{name: 'Запугивание', points: 1},
		{name: 'Проницательность', points: 1},
		{name: 'Внешний вид', points: 1},
		{name: 'Манипулирование', points: 1}
	],
	intellect: [
		{name: 'Обучаемость', points: 1},
		{name: 'Выживание', points: 1},
		{name: 'Медицина', points: 1}
	],
	strength: [{name: 'Атака', points: 1}]
}

function App() {
	return (
		<div className="App">
			<Name />
			<Block direction="row">
				<Avatar />
				<Block direction="column">
					<BasicStats />
					<OtherStats />
				</Block>
			</Block>
			<Block direction="row">
				<Block direction="column">
					<Strength>
						<Skills skills={skills.strength} />
					</Strength>
					<Charisma>
						<Skills skills={skills.charisma} />
					</Charisma>
				</Block>
				<Block direction="column">
					<Agility>
						<Skills skills={skills.agility} />
					</Agility>
					<Intellect>
						<Skills skills={skills.intellect} />
					</Intellect>
				</Block>
			</Block>
			<ImportChar />
			<ExportChar />
		</div>
	);
}

export default App;
