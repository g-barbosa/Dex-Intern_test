import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../components/HomePage/HomePage'
import Foods from '../components/Foods/foods'
import People from '../components/People/People'
import Places from '../components/Places/Places'

const Routes = () => (

	<BrowserRouter>
		<Switch>
			<Route exact path='/' render={() => <Home/>}/>
			<Route path='/foods' render={() => <Foods/>}/>
			<Route path='/people' render={() => <People/>}/>
			<Route path='/places' render={() => <Places/>}/>
			<Route path='*'  render={() => <h1>PAGE NOT FOUND!</h1>}/>
		</Switch>
	</BrowserRouter>
)
export default Routes