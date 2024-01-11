import React, { useRef, useEffect } from 'react';

export const StarBar = ({percent}) => {
	const star = useRef();
	const appearPercent = percent * 100;
	
	useEffect(() => {
		star.current.classList.add('appear');
		star.current.style = `width: ${appearPercent}%;`;
	}, [appearPercent]);

	return (
		<div className="icons float-end">
			<div ref={star} className="icons-red"></div>
			<style jsx="true">{`
				.icons{
				  	width: 111px;
				  	height: 14px;
				  	background: url(../img/star-grey.png) no-repeat;
				}
				.icons-red{
					height: 14px;
					width: 0%;
				  	background: url(../img/star-red.png) no-repeat;
				}
				.icons-red.appear {
					transition: width 1s ease-in;
				}
			`}</style>
		</div>
	)
};