import React from 'react';
import Container from './Container';
import Input from './Input';
import Text from './Text';
import {IconButton} from '../../common';

function Name({editing, name, onCancelClick, onEditClick, onSaveClick}) {
	return (editing ? (
		<Container>
			<Input defaultValue={name}/>
			<IconButton onClick={onSaveClick} icon="save" title="Сохранить" />
			<IconButton onClick={onCancelClick} icon="cancel" title="Отменить" />
		</Container>
	) : (
		<Container>
			<Text>{name}</Text>
			<IconButton onClick={onEditClick} icon="edit" title="Редактировать" />
		</Container>
	));
}

export default Name;
