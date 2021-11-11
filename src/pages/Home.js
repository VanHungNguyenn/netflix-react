import React from 'react'
import Button from '../components/button/Button'
import { FaBeer } from 'react-icons/fa'

const Home = () => {
	return (
		<div>
			<Button>
				<FaBeer color='#FFFFFF' fontSize='20px' />
				Hello
			</Button>
		</div>
	)
}

export default Home
