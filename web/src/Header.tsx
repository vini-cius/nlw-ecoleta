import React from 'react';

interface HeaderProps {
	title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<header>
			<h3>{props.title}</h3>
		</header>
	);
};

export default Header;
