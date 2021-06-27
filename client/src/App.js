import './App.css';
import RegisterComponent from './components/RegisterComponent';
import TestComponent from './components/TestComponent';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [isLoggedIn,setIsLoggedIn] = useState(false)
	function updateLogin(){
		setIsLoggedIn(true);
	}
	return (
		<div className="App">
			<div className="container">
				<BrowserRouter>
					<Switch>
						<Route path="/">
							{isLoggedIn ? <Redirect to="/test" component={TestComponent} /> : <RegisterComponent isLoggedIn={isLoggedIn} onRegistration={updateLogin}/>}
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
