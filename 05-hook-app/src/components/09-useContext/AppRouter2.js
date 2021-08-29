// an applicaton can has many routers

import {
  BrowserRouter as Router,
  Switch,
  Route,
	Redirect
} from "react-router-dom";

import { NavBar } from "./NavBar";

import { Test } from "./Test";

export const AppRouter2 = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<div className="container">
					<Switch>

						<Route exact path="/test" component={ Test } />

						{ /* 404 <Route component={ HomeScreen } /> */}
						<Redirect to="/" />
					</Switch>
				</div>
			</div>
		</Router>
	)
}