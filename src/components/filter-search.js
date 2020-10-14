import React from 'react';
import styled from 'styled-components';
import FilterRow from './filter-row';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	border-radius: 5px;
	background-color: gold;
	width: 80%;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	padding: 1em 0;
`;

export default function Name() {
	return (
		<Wrapper>
			<Box>
				<Row>
					<FilterRow />
				</Row>
			</Box>
		</Wrapper>
	);
}
