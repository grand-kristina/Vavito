import React, { useState } from 'react'
import { IMAGE } from '../../images'
import './Add.sass'
import axios from 'axios'

export const Add = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [mark, setMark] = useState('')
	const [model, setModel] = useState('')
	const [year, setYear] = useState('')
	const [color, setColor] = useState('')
	const [price, setPrice] = useState('')
	const [descr, setDescr] = useState('')
	const [photoUrl, setPhotoUrl] = useState('')
	const [mail, setMail] = useState('')
	const [distance, setDistance] = useState('')

	const send = () => {
		axios({
			method: 'post',
			url: 'http://localhost:3000/add',
			data: {
				name,
				phone,
				mark,
				model,
				year,
				color,
				price,
				descr,
				photoUrl,
				mail,
				distance,
			},
		})
	}

	return (
		<div id='add'>
			<div className='title'>Подать объявление</div>
			<div className='row'>
				<div className='block'>
					<div className='-title'>Ваше имя</div>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='block'>
					<div className='-title'>Телефон</div>
					<input
						type='text'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='block'>
					<div className='-title'>Марка</div>
					<input
						type='text'
						value={mark}
						onChange={(e) => setMark(e.target.value)}
					/>
				</div>
				<div className='block'>
					<div className='-title'>Модель</div>
					<input
						type='text'
						value={model}
						onChange={(e) => setModel(e.target.value)}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='block'>
					<div className='-title'>Год выпуска</div>
					<input
						type='text'
						value={year}
						onChange={(e) => setYear(e.target.value)}
					/>
				</div>
				<div className='block'>
					<div className='-title'>Цвет</div>
					<input
						type='text'
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='block'>
					<div className='-title'>Пробег</div>
					<input
						type='text'
						value={distance}
						onChange={(e) => setDistance(e.target.value)}
					/>
				</div>
				<div className='block'>
					<div className='-title'>Почта</div>
					<input
						type='text'
						value={mail}
						onChange={(e) => setMail(e.target.value)}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='block'>
					<div className='-title'>Цена</div>
					<input
						type='text'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className='block'>
					<div className='-title'>Описание</div>
					<input
						type='text'
						value={descr}
						onChange={(e) => setDescr(e.target.value)}
					/>
				</div>
			</div>
			<div className='row'>
				<div className='block'>
					<div className='-title'>Фото Url</div>
					<input
						type='text'
						value={photoUrl}
						onChange={(e) => setPhotoUrl(e.target.value)}
					/>
				</div>
				<div className='btn' onClick={send}>
					Отправить
				</div>
			</div>
		</div>
	)
}
