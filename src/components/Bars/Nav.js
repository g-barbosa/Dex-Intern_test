import React, {Component} from 'react'
import {Link} from "react-router-dom"
import logo from '../../assets/logo.png'
import '../../css/Nav.css'

export default class Nav extends Component {
	render(){
		return(
			<div className="bg-white fixed-top shadow">
				<div className='navSpace'>
					<nav className="navbar navbar-expand-sm">
						<img className='logoNav' src={logo}/>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav ml-auto">
								<li >
									<Link className="nav-link linkR" to="/foods">FOODS</Link>
								</li>
								<li>
									<Link className="nav-link linkR" to="/people">PEOPLE</Link>
								</li>
								<li>
									<Link className="nav-link linkR" to="/places">PLACES</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>

		)
	}
}