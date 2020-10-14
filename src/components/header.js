import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: cursive;
`;

const Header = () => {
	return (
		<Wrapper>
			<h1>
				COLD BEERS <span>🍻</span>
			</h1>
		</Wrapper>
	);
};

export default Header;
