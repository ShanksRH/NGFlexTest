import React from 'react';
import {IconButton} from '../../common';
import Input from './Input';

function ImportChar({onClick, onChange, inputRef}) {
	return (
		<>
			<IconButton
				icon="import"
				title="Загрузить из файла"
				onClick={onClick}
			/>
			<Input
				type="file"
				accept=".json,application/json"
				multiple={false}
				onChange={onChange}
				ref={inputRef}
			/>
		</>
	);
}

export default ImportChar;
