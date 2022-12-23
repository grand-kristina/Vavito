import React from 'react'
import { IMAGE } from '../../images'
import './Item.sass'

export const Item = ({
	item: {
		mark,
		model,
		year,
		descr,
		name,
		phone,
		mail,
		color,
		distance,
		datetime,
		photoUrl,
	},
}) => {
	return (
		<div id='item'>
			<div className='title'>
				{mark} {model}, {year}
			</div>
			<div className='block'>
				<div className='col1'>
					<div
						className='image'
						style={{ backgroundImage: `url(${photoUrl})` }}
					/>
					<div className='title'>Описание</div>
					<div className='descr'>{descr}</div>
					<div className='link'>Пожаловаться</div>
				</div>
				<div className='col2'>
					<div className='author'>{name}</div>
					<div className='chast'>Частное лицо</div>
					<div className='info'>
						<div className='title'>Телефон</div>
						<div className='value'>{phone}</div>
					</div>
					<div className='info'>
						<div className='title'>Почта</div>
						<div className='value'>{mail}</div>
					</div>
					<div className='list'>
						<div className='item'>Цвет: {color}</div>
						<div className='item'>Марка: {mark}</div>
						<div className='item'>Модель: {model}</div>
						<div className='item'>Год: {year}</div>
						<div className='item'>Пробег: {distance} км</div>
						<div className='item'>Опубликовано: {datetime}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
