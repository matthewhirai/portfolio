import React from "react";
import "./social-contact.css";
import { SocialData } from "../../data/social";
const SocialContact = () => {
	const data = SocialData;
	return (
		<div className="social-contact">
			{data.map((item) => {
				return (
					<a href={item.link} key={item.platform}>
						<div className="social-icon-div">
							<img src={item.icon} className="social-icon" />
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default SocialContact;
