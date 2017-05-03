import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
		    apiKey: 'AIzaSyAu-jXyj6tLSjlh1tWvc5K_hD79O01mAt0',
		    authDomain: 'manager-29b88.firebaseapp.com',
		    databaseURL: 'https://manager-29b88.firebaseio.com',
		    projectId: 'manager-29b88',
		    storageBucket: 'manager-29b88.appspot.com',
		    messagingSenderId: '436340648829'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;