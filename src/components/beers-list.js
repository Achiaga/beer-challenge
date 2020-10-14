import React from 'react';
import styled from 'styled-components';
import BeerCard from './Beer-card';
import { useDispatch, useSelector } from 'react-redux';
import { allBeers } from '../features/beerSlice';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	overflow: scroll;
`;

const BeerList = () => {
	const allBeersList = useSelector(allBeers);
	return (
		<Wrapper>
			{allBeersList &&
				allBeersList.map((beerItem, index) => {
					return <BeerCard beerItem={beerItem} key={index} />;
				})}
		</Wrapper>
	);
};

export default BeerList;
