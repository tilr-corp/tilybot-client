import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';
import rootReducer from 'reducers';
import MessengerComponent from 'components/MessengerComponent';
import textSubmitHandler from 'actions/textSubmitHandler';

ReactDOM.render(
	<Provider store={createStore(rootReducer, applyMiddleware(ReduxThunk))}>
		<Grid style={{ padding:'50px' }}>
			<Row>
				<Col xsOffset={2} smOffset={2} mdOffset={3} xs={8} sm={8} md={6}>
					<MessengerComponent onSubmit={textSubmitHandler} />
				</Col>
			</Row>
		</Grid>
	</Provider>,
	document.getElementById('root')
);