import React from "react";
import "./skills.css";
import Separator from "../../common/separator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
const Skills = () => {
	const data = SkillsData;
	return (
		<div className="skills">
			<Separator />
			<label className="section-title">Skills</label>
			<div className="skills-container">
				{data.map((item, index) => {
					return (
						<div className="skills-section" key={index}>
							<label className="skills-section-title">{item.type}</label>
							<div className="skills-list">
								{item.list.map((skill) => {
									return <SkillCard skill={skill} key={skill.name} />;
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
