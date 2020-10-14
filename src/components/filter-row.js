import React from 'react';
import styled from 'styled-components';
import AlcoholInputWrapper from './alcohol-input-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { maxBeerAlcohol, minBeerAlcohol, requestBeerList } from '../features/beerSlice';

const FilterRow = () => {
	const dispatch = useDispatch();

	const maxValue = useSelector(maxBeerAlcohol);
	const minValue = useSelector(minBeerAlcohol);

	const handleInput = (e) => {
		const { id, value } = e.target;
		if (id === 'max') return dispatch(requestBeerList(minValue, value));
		return dispatch(requestBeerList(value, maxValue));
	};

	return (
		<>
			<h4>Alcohol</h4>
			<AlcoholInputWrapper text='min' handleInput={handleInput} value={minValue} />
			<AlcoholInputWrapper text='max' handleInput={handleInput} value={maxValue} />
		</>
	);
};

export default FilterRow;
