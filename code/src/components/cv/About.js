import React from 'react';
import { Box } from '../layout';

export const About = ({...data}) => {
	return (
		<Box title="About me">
        	<p dangerouslySetInnerHTML={{__html: data.about.text}} />
      	</Box>
	);
};