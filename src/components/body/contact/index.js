import React from 'react';
import './contact.css';
import Separator from '../../common/separator/index';
import SocialContact from '../../common/social-contact/index';
import Resume from '../../../assets/Matthew_Hirai_Resume.pdf';
const Contact = () => {
	return (
		<div className="contact">
			<Separator />
			<label className="section-title">Contact</label>
			<div className="contact-container">
				<div className="contact-left">
					<p>Want to get in touch? Contact me on any of these platforms</p>
					<SocialContact />
				</div>
				<div className="download">
					<a download href={Resume}>
						<i class="fi fi-rr-download" />
						Download Résumé
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
