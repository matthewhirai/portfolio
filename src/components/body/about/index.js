import React from 'react';
import './about.css';
import picture from '../../../assets/about.png';
import SocialContact from '../../common/social-contact';

const About = () => {
	return (
		<div className="about">
			<div className="about-top">
				<div className="about-info">
					Hello there. I am
					<br />
					<span className="info-name">Matthew Hirai</span>.
					<br /> I love experimenting with the web.
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
