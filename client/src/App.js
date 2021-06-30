import './App.css';
import NavBar from './components/Navbar';
import TestComponent from './components/TestComponent';
import StudentDashBoard from './components/Student/StudentDashBoard';
import TeacherDashBoard from './components/Teacher/TeacherDashBoard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<div className="container">
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route path="/student" component={StudentDashBoard} />
						<Route path="/teacher" component={TeacherDashBoard} />
						<Route path="/">
							<TestComponent />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
