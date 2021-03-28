import React from 'react';
import Container from './Container';
import Input from './Input';
import Text from './Text';
import {Button} from '../../common';

function Name({editing, name, onCancelClick, onEditClick, onSaveClick}) {
	return (editing ? (
		<Container>
			<Input defaultValue={name}/>
			<Button onClick={onCancelClick}>Отменить</Button>
			<Button onClick={onSaveClick}>Сохранить</Button>
		</Container>
	) : (
		<Container>
			<Text>{name}</Text>
			<Button onClick={onEditClick}>Редактировать</Button>
		</Container>
	));
}

export default Name;
