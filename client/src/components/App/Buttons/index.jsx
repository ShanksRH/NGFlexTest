import React from 'react';
import Container from './Container';
import {IconButton} from '../../common';

function Buttons({editing, onCancelClick, onEditClick, onSaveClick}) {
	return (
		<Container>
			{
				editing ? (
					<>
						<IconButton
							icon="save"
							title="Сохранить"
							onClick={onSaveClick}
						/>
						<IconButton
							icon="cancel"
							title="Отменить"
							onClick={onCancelClick}
						/>
					</>
				) : (
					<IconButton
						onClick={onEditClick}
						icon="edit"
						title="Редактировать"
					/>
				)
			}
		</Container>
	);
}

export default Buttons;
