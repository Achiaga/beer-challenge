import React from 'react';
import styled from 'styled-components';
import FilterSearch from './filter-search';
import BeersList from './beers-list.js';

const Wrapper = styled.div`
	/* height: calc(100vh - 100px); */
`;

const Body = () => {
	return (
		<Wrapper>
			<FilterSearch />
			<BeersList />
		</Wrapper>
	);
};

export default Body;
