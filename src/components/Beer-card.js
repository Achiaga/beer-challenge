import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	border: 1px solid black;

	margin-top: 3em;
	height: 200px;
	min-width: 100px;
	border-radius: 5px;
	position: relative;
`;

const Title = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 0px;
	text-align: center;
`;

const Img = styled.img`
	height: 100%;
`;
const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1em;
	padding: 0 1em;
`;

const BeerCard = ({ beerItem }) => {
	return (
		<CardWrapper>
			<Card>
				<Img src={beerItem.image_url}></Img>
			</Card>
			<Title>{beerItem.name}</Title>
		</CardWrapper>
	);
};

export default BeerCard;
