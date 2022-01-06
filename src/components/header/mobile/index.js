import React from 'react';
import './mobile.css';

const Mobile = ({ isOpen, setIsOpen }) => {
	return (
		<div className="mobile">
			<div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
				<i className="fi fi-rr-cross-circle" />
			</div>
			<div className="mobile-options">
				<div className="mobile-option">
					<a href="#projects">
						<i className="fi fi-rr-edit-alt option-icon" />Projects
					</a>
				</div>
				<div className="mobile-option">
					<a href="#skills">
						<i className="fi fi-rr-laptop option-icon" />Skills
					</a>
				</div>
				<div className="mobile-option">
					<a href="#contact">
						<i className="fi fi-rr-user-add option-icon" />Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
