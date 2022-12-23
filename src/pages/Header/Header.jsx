import React from 'react'
import { PAGE } from '../../App.jsx'
import { IMAGE } from '../../images/index.js'
import './Header.sass'

export const Header = ({ setPage }) => {
	return (
		<div id='header'>
			<div className='container'>
				<div
					className='logo'
					onClick={() => setPage(PAGE.Main)}
					style={{ backgroundImage: `url(${IMAGE.Common.Logo})` }}
				/>
			</div>
		</div>
	)
}
