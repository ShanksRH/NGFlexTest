import React from 'react';
import {IconButton} from '../../common';

function ImportChar({onClick}) {
	return (
		<IconButton
			icon="export"
			title="Сохранить файл"
			onClick={onClick}
		/>
	);
}

export default ImportChar;
