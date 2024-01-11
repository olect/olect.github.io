import React from 'react';
import { Box } from '../layout';
import { StarBar } from './StarBar';

export const Languages = ({...data}) => {

	return (
		<Box>
			<div id="language-skills">
				{data.languages.map((lang,i) => 
					<div className="skill" key={`lang-${i}`}>{lang.name} <StarBar percent={lang.percent} /></div>
				)}
			</div>
			<style jsx="true">{`
				#language-skills .skill{
				  font-size: 1.3em;
				  margin: 10px 0;
				  padding-bottom: 10px;
				  border-bottom: 1px solid #eee;
				}
				#language-skills .skill .icons{
				  width: 111px;
				  height: 14px;
				  background: url(../img/star-grey.png) no-repeat;
				}
				#language-skills .skill .icons-red{
				  background: url(../img/star-red.png) no-repeat;
				}
			`}</style>
		</Box>
	)
};