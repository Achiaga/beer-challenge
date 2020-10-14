import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
`;
const AlcoholInput = styled.input`
	width: 2em;
`;
const Label = styled.div`
	position: absolute;
	top: -1.2em;
	left: 0.3em;
`;
const Units = styled.div`
	position: absolute;
	top: 0em;
	left: 2.5em;
`;

const AlcoholInputWrapper = ({ text, handleInput, value }) => {
	return (
		<>
			<Wrapper>
				<AlcoholInput type='number' id={text} onChange={handleInput} value={value} />
				<Label>{text}</Label>
				<Units>%</Units>
			</Wrapper>
		</>
	);
};

export default AlcoholInputWrapper;
