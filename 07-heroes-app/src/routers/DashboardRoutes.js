import {
	Switch,
	Route,
	Redirect} from "react-router-dom";
import { DcScree } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<div>
				<Switch>

					<Route exact path='/marvel' component={ MarvelScreen } /> 
					<Route exact path='/heroe/:heroeid' component={ HeroScreen } /> 
					<Route exact path='/dc' component={ DcScree } /> 
					
					<Redirect to='/marvel' />
				</Switch>
			</div>
		</>
	)
}
