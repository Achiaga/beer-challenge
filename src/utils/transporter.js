import fetchApi from './api';

export const fetchBeerList = (minABV, maxABV) => {
	return fetchApi(`/beers?abv_gt=${minABV}&abv_lt=${maxABV}`);
};
