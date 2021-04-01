import React from 'react';
import Link from './Link';
import {IconButton} from '../../common';

function ImportChar({href, linkRef, onClick}) {
	return (
		<>
			<IconButton
				icon="export"
				title="Сохранить файл"
				onClick={onClick}
			/>
			<Link
				download="character.json"
				href={href}
				ref={linkRef}
			/>
		</>
	);
}

export default ImportChar;
