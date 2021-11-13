import React, { useEffect, useRef } from 'react'
import './header.scss'
import { FaBell, FaSearch } from 'react-icons/fa'
import Logo from '../../assets/logo.png'
import Avatar from '../../assets/avatar.png'
import { Link, useLocation } from 'react-router-dom'

const headerNav = [
	{
		display: 'Home',
		path: '/',
	},
	{
		display: 'TV Shows',
		path: '/tv',
	},
	{
		display: 'Movies',
		path: '/movie',
	},
	{
		display: 'New & Popular',
		path: '/new-and-popular',
	},
	{
		display: 'My List',
		path: '/my-list',
	},
]

const Header = () => {
	const { pathname } = useLocation()
	const headerRef = useRef(null)
	console.log(headerRef)

	const active = headerNav.findIndex((e) => e.path === pathname)

	useEffect(() => {
		const shrinkHeader = () => {
			if (
				document.body.scrollTop > 80 ||
				document.documentElement.scrollTop > 80
			) {
				headerRef.current.classList.add('shrink')
			} else {
				headerRef.current.classList.remove('shrink')
			}
		}

		window.addEventListener('scroll', shrinkHeader)
		return () => {
			window.removeEventListener('scroll', shrinkHeader)
		}
	}, [])

	return (
		<div className='header' ref={headerRef}>
			<div className='header__wrap container'>
				<div className='header__wrap--left'>
					<div className='logo'>
						<Link to='/'>
							<img src={Logo} alt='logo' />
						</Link>
					</div>
					<ul className='header__nav'>
						{headerNav.map((item, i) => {
							return (
								<li
									key={i}
									className={`${
										i === active ? 'active' : ''
									}`}
								>
									<Link to={item.path}>{item.display}</Link>
								</li>
							)
						})}
					</ul>
				</div>
				<div className='header__wrap--right'>
					<FaSearch className='icon' />
					<FaBell className='icon' />
					<img src={Avatar} alt='avatar' />
				</div>
			</div>
		</div>
	)
}

export default Header
