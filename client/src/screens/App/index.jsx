import './App.css';
import {
	BasicStats,
	ExportChar,
	ImportChar,
	Name,
	OtherStats,
	Skills
} from '../../components/App';

function App() {
	return (
		<div className="App">
			<header>
				<ImportChar />
				<ExportChar />
			</header>
			<main>
				<Name />
				<hr />
				<hr />
				<BasicStats />
				<hr />
				<hr />
				<OtherStats />
				<hr />
				<hr />
				<Skills />
			</main>
		</div>
	);
}

export default App;
