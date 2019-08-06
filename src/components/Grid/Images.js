import React, {Component} from 'react'
import '../../css/images.css'

export default class Images extends Component {
	render(){
		return (
        	<img  src={this.props.src} alt={this.props.alt}/>
		)
	}
}