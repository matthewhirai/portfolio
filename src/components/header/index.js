import React, { useState } from 'react';
import './header.css';
import Mobile from './mobile/index.js';
import Web from './web/index.js';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="header">
			{/* <div className="logo">Logo</div> */}
			<div className="menu">
				<div className="web-menu">
					<Web />
				</div>
				<div className="mobile-menu">
					<div onClick={() => setIsOpen(!isOpen)}>
						<i className="fi fi-rr-apps menu-icon" />
					</div>
					{isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
				</div>
			</div>
		</div>
	);
};

export default Header;
