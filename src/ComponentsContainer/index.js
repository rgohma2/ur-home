import React from 'react'
import Image from 'react-bootstrap/Image';

class ComponentsContainer extends React.Component {
	constructor(props) {

		super(props)

		this.state = {

		}
	}

	/*
	https://ibb.co/zHq3nFW
	https://ibb.co/54nFBfR
	https://ibb.co/NNHyhFw
	https://ibb.co/kJ2qbsC
	https://ibb.co/FwYK3Kn
	https://ibb.co/4FPdZkt
	*/

	render() {
		return(
			<div>
				{
					this.props.page === 'home'
					?
					<div style={{backgroundColor: '#dce1e6', height:"8000px"}}>
			          <Image 
			          src="https://i.ibb.co/Nnc0Vrg/ur-home-background.jpg" 
			          width="100%"
			          />
			            <h1 
			            id='fade-text'
			            style={{
			              padding: '20px',
			              color: '#242c33',
			              backgroundColor:'#f8f9fa'
			            }}
			            >
			              Let us make your Savannah vacation stay <span style={{}}>remarkable</span>
			            </h1>
			        </div>
			        :
			        null
				}
				{
					this.props.page === 'about'
					?
					<div style={{backgroundColor: '#dce1e6', height:"8000px"}}>
			          <Image 
			          src="https://i.ibb.co/qjW5kPr/ur-home-about.jpg" 
			          width="73%"
			          />
			            <h1 
			            id='fade-text'
			            style={{
			              padding: '20px',
			              color: '#242c33'
			            }}
			            >
			              About Us
			            </h1>
			        </div>
			        :
			        null
				}
				{
					this.props.page === 'shopping'
					?
					<div style={{backgroundColor: '#dce1e6', height:"8000px"}}>
			          <Image 
			          src="https://i.ibb.co/7QtrMdm/ur-home-shopping.jpg" 
			          width="70%"
			          />
			            <h1 
			            id='fade-text'
			            style={{
			              padding: '20px',
			              color: '#242c33'
			            }}
			            >
			              Shopping Needs
			            </h1>
			        </div>
			        :
			        null
				}
				{
					this.props.page === 'transportation'
					?
					<div style={{backgroundColor: '#dce1e6', height:"8000px"}}>
			          <Image 
			          src="https://i.ibb.co/MgM6DdS/ur-home-transportation.jpg"
			          width="70%" 
			          
			          />
			            <h1 
			            id='fade-text'
			            style={{
			              padding: '20px',
			              color: '#242c33'
			            }}
			            >
			              Transportation
			            </h1>
			        </div>
			        :
			        null
				}
				{
					this.props.page === 'luggage'
					?
					<div style={{backgroundColor: '#dce1e6', height:"8000px"}}>
			          <Image 
			          src="https://i.ibb.co/2Mfk2FX/ur-home-luggage.jpg"
			          width="90%"
			          style={{
			          	padding: '0 5%'
			          }} 
			          />
			            <h1 
			            id='fade-text'
			            style={{
			              padding: '20px',
			              color: '#242c33'
			            }}
			            >
			              Luggage Storage
			            </h1>
			        </div>
			        :
			        null
				}
				{
					this.props.page === 'tours'
					?
					<div style={{backgroundColor: '#dce1e6', height:"8000px"}}>
			          <Image 
			          src="https://i.ibb.co/DCMtWtL/ur-home-tours.jpg" 
			          width="72%" 
			          />
			            <h1 
			            id='fade-text'
			            style={{
			              padding: '20px',
			              color: '#242c33'
			            }}
			            >
			              Tours & Special Events
			            </h1>
			        </div>
			        :
			        null
				}


	        </div>
		)
	}
}

export default ComponentsContainer
