import React from 'react';

export const SkillLegend = ({...data}) => {
	return (
		<div className="skills-legend clearfix">
			<div className="legend-left legend">Beginner</div>
			<div className="legend-left legend"><span>Good</span></div>
			<div className="legend-right legend"><span>Experienced</span></div>
			<div className="legend-right legend">Expert</div>
		</div>
	)
}