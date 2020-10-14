import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestBeerList } from './features/beerSlice';
import Header from './components/header';
import Body from './components/body';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestBeerList(0, 50));
	}, []);

	return (
		<>
			<Header />
			<Body />
		</>
	);
}

export default App;
