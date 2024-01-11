import React from 'react';
import { SkillLegend, SkillBar } from './';
import { Box } from '../layout';

export const Skills = ({type, skills}) => {
	return (
		<Box title={type}>
			<div className="skills">
				{skills.map((section,i) => 
					<div key={`section-${section.key}`} className="section">
						<h3>{section.title}</h3>
						{section.languages.map((skill,i) => 
							<div key={`skillbar-item-${i}`}>
								<SkillBar name={skill.description} percent={skill.percent} description={skill.desc} />
							</div>
						)}
					</div>
				)}
				<SkillLegend />
			</div>
			<style jsx="true">{`
				.item-skills{
				  height: 30px;
				  background: #49CC66;
				  color: #fff;
				  padding: 5px 10px;
				  margin-bottom: 5px;
				  white-space: nowrap;
				  overflow: hidden;
				  text-overflow: ellipsis;
				  font-size: 1.3em;
				  font-weight: 600;
				}
				.skills-legend{
				  margin-top: 20px;
				  opacity: 0.8;
				}
				.skills-legend:before{
				  width: 100%;
				  height: 3px;
				  position: relative;
				  content: ' ';
				  display: block;
				  margin-bottom: -13px;
				  background: #c6c6c6;
				}
				.skills-legend div{
				  width: 25%;
				  display: inline-block;
				  font-size: 1.2em;
				  color: #a9a9a9;
				  float: left;
				}
				.legend:before{
				  width: 3px;
				  height: 10px;
				  position: relative;
				  content: ' ';
				  display: block;
				  margin: auto;
				  margin-bottom: 15px;
				  background: #c6c6c6;
				}
				.legend-left.legend:before{
				  margin-left: 0;
				}
				.legend-right.legend:before{
				  margin-right: 0;
				}
				.legend-left:nth-child(2) span{
				  margin-left: -25px;
				}
				.legend-right:nth-child(3) span{
				  margin-right: -20px;
				}
				.legend-right{
				  text-align: right;
				}
			`}</style>
		</Box>
	);	
};