
import React, {Component} from 'react'
import 'bootstrap-css-only';
import '../../css/HomePage.css'
import {Redirect} from 	'react-router-dom'

export default class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: '',
		}

		this.handleChecked = this.handleChecked.bind(this)
	}

	handleChange = field => event => {
		this.setState({
			[field]: event.target.value
		})
	}

	handleChecked () {
		this.setState({
			isChecked: !this.state.isChecked
		})
	}

	submit = (event) => {
		event.preventDefault();
		this.setState({
			email: this.state.email,
			password: this.state.password,
			redirect: true
		})
	}

	render () {
		
		if(this.state.redirect) return <Redirect to='/foods'/>
		var typePasswd
		if(this.state.isChecked) typePasswd = 'text'
		else typePasswd = 'password'
		
		return(
			<div className='bgh'>
				<div className='box'>
					<form className="form" onSubmit={this.submit}>
						<div className='orangeForm'><br/></div>
						<label>Email</label>
						<input type='email' id='email' name="email" required onChange={this.handleChange('email')} className="form-control" placeholder="yourname@email.com"/>
						<label>Password</label>
						<input type={typePasswd} required id='password' name="password" onChange={this.handleChange('password')} className="form-control" placeholder="Password"/>
						<input type="checkbox" name="checkbox"  onChange={this.handleChecked} className="checkBox"/>
						<p className='p'>Problems with your account?</p>
						<button type="submit" className="btn btn-primary sign-in">Acessar</button>
					</form>
				</div>
			</div>
		)
	}

}
