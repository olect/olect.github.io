import React from 'react';
import { Box } from '../layout';

export const Keywords = ({type, keywords}) => {
	return (
		<Box title={type}>
			{keywords.map((keyword,i) =>
				<div className="hobby" key={`hobby-${i}`}><i className="fa-solid fa-heart"></i>{keyword}</div>
			)}
			<style jsx="true">{`
				.hobby{
				  color: #fff;
				  display: inline-block;
				  margin-right: 5px;
				  margin-bottom: 5px;
				  padding: 5px 5px 5px 25px;
				  background: #547F5D;
				  position: relative;
				  font-size: 1.2em;
				}
				.hobby i, .hobby svg {
					position: absolute;
				  	top: 9px;
				  	left: 7px;
				}
			`}</style>
		</Box>
	)	
};