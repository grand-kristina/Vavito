import React, { useState } from 'react'
import { PAGE } from '../../App.jsx'
import { IMAGE } from '../../images'
import './Main.sass'

export const Main = ({ setPage, select, list }) => {
	const [search, setSearch] = useState({ temp: '', cur: '' })
	const getList = () =>
		list
			.filter(({ mark, model }) =>
				`${mark.toLowerCase()} ${model.toLowerCase()}`.includes(search.cur)
			)
			.map(({ _id, photoUrl, price, mark, model, datetime }) => (
				<div className='-item' key={_id} onClick={() => select(_id)}>
					<div
						className='-image'
						style={{ backgroundImage: `url(${photoUrl})` }}
					/>
					<div className='-type'>
						<div
							className='-icon'
							style={{ backgroundImage: `url(${IMAGE.Category.Car})` }}
						/>
						<div className='-name'>
							{mark} {model}
						</div>
					</div>
					<div className='-sep' />
					<div className='-price'>
						<div
							className='-icon'
							style={{ backgroundImage: `url(${IMAGE.Common.Price})` }}
						/>
						<div className='-value'>{price} Руб</div>
					</div>
					<div className='-datetime'>
						<div
							className='-icon'
							style={{ backgroundImage: `url(${IMAGE.Common.Datetime})` }}
						/>
						<div className='-value'>{datetime}</div>
					</div>
				</div>
			))
	return (
		<div id='main'>
			<div className='row0'>
				<div className='title'>Поиск</div>
				<div className='addBtn' onClick={() => setPage(PAGE.Add)}>
					Добавить объявление
				</div>
			</div>
			<div className='row'>
				<input
					type='text'
					className='query'
					placeholder='Запрос'
					value={search.temp}
					onChange={(e) =>
						setSearch((prev) => ({ ...prev, temp: e.target.value }))
					}
				/>
				<div
					className='find'
					onClick={() => setSearch((prev) => ({ ...prev, cur: prev.temp }))}
				>
					Найти
				</div>
			</div>

			<div className='-list'>{getList()}</div>
		</div>
	)
}
