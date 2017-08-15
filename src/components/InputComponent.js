import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap';

const InputComponent = ({ textDisabled, onSubmit, dispatch }) => {
	let input;

	return (
		<form onSubmit={(event) => {
			event.preventDefault();
			dispatch(onSubmit(input.value.trim()));
			input.value = '';
		}}
		>
			<FormGroup>
				<InputGroup>
					<FormControl
					disabled={textDisabled}
					inputRef={node => { input = node; }}
					type="text" placeholder={textDisabled ? 'Use the buttons!' : "Say something!"}
					/>
					<InputGroup.Button>
						<Button
						disabled={textDisabled}
						type='submit'
						bsStyle='primary'
						style={{ backgroundColor:'#2797b7', borderColor:'#1f7a93' }}
						>
							<Glyphicon glyph='send' />
						</Button>
					</InputGroup.Button>
				</InputGroup>
			</FormGroup>
		</form>
	);
};

export default connect(
	(state) => { return { textDisabled: state.textDisabled }; },
	(dispatch) => { return { dispatch }; }
)(InputComponent);