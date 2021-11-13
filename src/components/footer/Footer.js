import React from 'react'
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './footer.scss'

const socials = [
	{
		link: 'https://www.facebook.com/',
		icon: <FaFacebookSquare />,
	},
	{
		link: 'https://www.instagram.com/',
		icon: <FaInstagramSquare />,
	},
	{
		link: 'https://twitter.com/',
		icon: <FaTwitter />,
	},
	{
		link: 'https://www.youtube.com/',
		icon: <FaYoutube />,
	},
]

const Footer = () => {
	return (
		<div className='footer container'>
			<div className='footer__container '>
				<div className='footer__social mb-2'>
					{socials.map((item, i) => {
						return (
							<div key={i} className='footer__social__item'>
								<Link to={item.link}>{item.icon}</Link>
							</div>
						)
					})}
				</div>
				<div className='footer__menu mb-3'>
					<div className='footer__menu__item'>
						<Link to='/'>Audio and Subtitles</Link>
						<Link to='/'>Media Center</Link>
						<Link to='/'>Privacy</Link>
						<Link to='/'>Contact Us</Link>
					</div>
					<div className='footer__menu__item'>
						<Link to='/'>Audio Description</Link>
						<Link to='/'>Investor Relations</Link>
						<Link to='/'>Legal Notices</Link>
					</div>
					<div className='footer__menu__item'>
						<Link to='/'>Help Center</Link>
						<Link to='/'>Jobs</Link>
						<Link to='/'>Cookie Preference</Link>
					</div>
					<div className='footer__menu__item'>
						<Link to='/'>Gift Cards</Link>
						<Link to='/'>Term of Use</Link>
						<Link to='/'>Corporate Information</Link>
					</div>
				</div>
				<div className='footer__service mb-2'>Service Code</div>
				<div className='footer__copyright'>
					<span>© 1997-2021 Netflix, Inc.</span>
					{'{d00fcb9a-66d4-4768-9f70-10b57b6191df}'}
				</div>
			</div>
		</div>
	)
}

export default Footer
