import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.sass'

import { Add, Header, Item, Main } from './pages'

export const PAGE = {
	Main: 0,
	Add: 1,
	Item: 2,
}

export const App = () => {
	const [page, setPage] = useState(PAGE.Main)
	const [items, setItems] = useState([])
	const [selected, setSelected] = useState(null)

	const getItems = async () => {
		const list = await axios({
			method: 'get',
			url: 'http://localhost:3000/list',
		})
		console.log(list.data)
		setItems(list.data)
	}

	useEffect(() => {
		getItems()
		if (page !== PAGE.Item) setSelected(null)
	}, [page])

	const select = (id) => {
		setSelected(id)
		setPage(PAGE.Item)
	}

	const getPage = () => {
		switch (page) {
			case PAGE.Main:
				return <Main setPage={setPage} select={select} list={items} />
			case PAGE.Add:
				return <Add />
			case PAGE.Item:
				return <Item item={items.find(({ _id }) => _id === selected)} />
		}
	}

	return (
		<div id='app'>
			<Header setPage={setPage} />
			{getPage()}
		</div>
	)
}
