import React from 'react';
import './about.css';
import picture from '../../../assets/about.png';
import SocialContact from '../../common/social-contact';

const About = () => {
	return (
		<div className="about">
			<div className="about-top">
				<div className="about-info">
					Hi there 👋. I'm <span className="info-name">Matthew Hirai</span>.
					<br /> I'm currently a student at CSU Long Beach and I hope to be able to create products that makes
					a positive impact.
				</div>
				<div className="about-photo">
					<img src={picture} className="picture" />
				</div>
			</div>
			<SocialContact />
		</div>
	);
};

export default About;
