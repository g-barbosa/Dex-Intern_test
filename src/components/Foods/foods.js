import React, {Component} from 'react'
import Nav from '../Bars/Nav'
import Images from '../Grid/Images'
import '../../css/images.css'
import 'bootstrap-css-only'

export default class Foods extends Component {
	constructor(props){
		super(props)
		this.state = {
			img: []
		}
	}

	render(){
		fetch('http://localhost:1337/parse/functions/getAllFoods', {
			method: 'post',
			dataType: 'json',
			headers: {
				'X-Parse-Application-Id': 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
				'Content-Type': 'application/json' 
			}
		})
		.then(response => response.json())
		.then(response => {
			let img = []

			response.result.forEach(i => {

				img.push({name: i.name, link: i.link})
				
			})
			this.setState({
				img: img
			})
			}).catch(error => {
				console.log(error)
			})

		return(
			<div>
				<Nav/>
				<div className='ContainerImg'>
					<div className='TitleOfList'>
						<h1>LIST OF FOODS</h1>
						<div className="ColorGradientDiv"><br/></div>
					</div>	
					{
						this.state.img.map( i => {
							return (
								
								<Images src={i.link} alt={i.count}/>
							)
						})
					}
				</div>
			</div>
		)
	}
}