import React from 'react';
import {IconButton} from '../../common';

function ImportChar({onClick}) {
	return (
		<IconButton
			icon="import"
			title="Загрузить из файла"
			onClick={onClick}
		/>
	);
}

export default ImportChar;
