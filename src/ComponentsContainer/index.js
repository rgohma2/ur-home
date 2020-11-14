import React from 'react'
import Image from 'react-bootstrap/Image';

class ComponentsContainer extends React.Component {
	constructor(props) {

		super(props)

		this.state = {

		}
	}

	render() {
		return(
			<div>
				{
					this.props.page === 'home'
					?
					<div style={{backgroundColor: '#dce1e6', height:"8000px"}}>
			          <Image 
			          src="/ur-home-background.jpg" 
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
			          src="/ur-home-about.jpeg" 
			          width="7%"
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
			          src="/ur-home-shopping.jpeg" 
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
			          src="/ur-home-transportation.jpg"
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
			          src="/ur-home-luggage.jpg" 
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
			          src="/ur-home-tours.jpg" 
			          
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
