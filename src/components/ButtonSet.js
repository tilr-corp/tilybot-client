import React from 'react';
import ButtonComponent from 'components/ButtonComponent';
import { ButtonGroup } from 'react-bootstrap';

const createButtons = (buttons, onClick) => {
	return buttons.map((elem) => (
		<ButtonComponent
		label={elem.label}
		value={elem.value}
		key={ typeof elem.value === 'string' ? elem.value : JSON.stringify(elem.value) }
		onClick={onClick}
		/>
	));
}

const ButtonSet = ({ buttons, spacing, onClick }) => {
	return (
		<ButtonGroup vertical={spacing} block={spacing}>
			{createButtons(buttons, onClick)}
		</ButtonGroup>
	);
};

export default ButtonSet;