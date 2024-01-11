import React, { useRef, useEffect } from 'react';

export const SkillBar = ({name, percent, description}) => {
	const bar = useRef();
	const appearPercent = percent * 100;
	
	useEffect(() => {
		bar.current.classList.add('appear');
		bar.current.style = `width: ${appearPercent}%; height: ${description?50:30}px`;
	}, [appearPercent]);

	return (
		<div>
			<div ref={bar} className="item-skills" data-percent={percent}>
				<span className="name">{name}</span>
				{description &&
					<span className="description">{description}</span>
				}
			</div>
			<style jsx="true">{`
				.item-skills {
					width: 0%;
				}
				.item-skills.appear {
					transition: width 1s ease-in;
				}
				.item-skills .description {
					display: block;
					clear: both;
					font-size: 11px;
					font-style: italic;
				}
			`}</style>
		</div>
	)
}