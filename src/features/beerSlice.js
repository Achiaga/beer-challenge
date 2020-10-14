import { createSlice } from '@reduxjs/toolkit';
import { fetchBeerList } from '../utils/transporter';

export const beerSlice = createSlice({
	name: 'beer',
	initialState: {
		beer: [],
		maxABV: '50',
		minABV: '0',
	},
	reducers: {
		listBeer: (state, action) => {
			state.beer = action.payload;
		},
		updateABV: (state, action) => {
			state.maxABV = action.payload.max;
			state.minABV = action.payload.min;
		},
	},
});

export const { listBeer, updateABV } = beerSlice.actions;

export const requestBeerList = (minABV, maxABV) => async (dispatch) => {
	try {
		dispatch(updateABV({ min: minABV, max: maxABV }));
		const results = await fetchBeerList(minABV, maxABV);
		dispatch(listBeer(results));
	} catch (err) {
		console.log(err);
	}
};

export const getBeers = (state) => state.beer;
export const allBeers = (state) => getBeers(state).beer;
export const maxBeerAlcohol = (state) => getBeers(state).maxABV;
export const minBeerAlcohol = (state) => getBeers(state).minABV;

export default beerSlice.reducer;
