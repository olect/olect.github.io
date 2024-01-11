import React from 'react';
import { Box } from '../layout';
export const Education = ({...data}) => {

	return (
		<Box title="Education">
            { data && data.education &&
            <ul id="education" className="clearfix">
        		{data.education.map((edu,i) => 
            		<li key={`education-${i}`}>
            			<div className="year float-start">{edu.year}</div>
            			<div className="description float-end">
            				<h3>{edu.title}</h3>
            				<p>{edu.description}</p>
            			</div>
            		</li>
            	)}
            </ul>
            }
            <style jsx="true">{`
		        #education{
				  margin-top: 20px;
				  position: relative;
				  padding: 1em 0;
				  list-style: none;
				}
				#education:before {
				  width: 5px;
				  height: 100%;
				  position: absolute;
				  left: 25px;
				  top: 0;
				  content: ' ';
				  display: block;
				  background: #547F5D;
				  background: -moz-linear-gradient(top,  #ffffff 0%, #547F5D 7%, #547F5D 89%, #ffffff 100%);
				  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(7%,#547F5D), color-stop(89%,#547F5D), color-stop(100%,#ffffff));
				  background: -webkit-linear-gradient(top,  #ffffff 0%,#547F5D 7%,#547F5D 89%,#ffffff 100%);
				  background: -o-linear-gradient(top,  #ffffff 0%,#547F5D 7%,#547F5D 89%,#ffffff 100%);
				  background: -ms-linear-gradient(top,  #ffffff 0%,#547F5D 7%,#547F5D 89%,#ffffff 100%);
				  background: linear-gradient(to bottom,  #ffffff 0%,#547F5D 7%,#547F5D 89%,#ffffff 100%);
				  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 );
				}
				#education li{
				  width: 100%;
				  z-index: 2;
				  position: relative;
				  float: left;
				}
				#education .year{
				  width: 20%;
				  background: #fff;
				  padding: 10px;
				  font-size: 1.5em;
				  font-weight: 700;
				  display: inline-block;
				}
				#education .description{
				  width: 80%;
				  display: inline-block;
				  background: #eee;
				  margin-bottom: 10px;
				  position: relative;
				  padding: 10px 10px 0 10px;
				  border-bottom: 1px solid #ddd;
				}
				#education .description:after {
				  content: '';
				  position: absolute;
				  top: 15px;
				  right: 0;
				  left: -15px;
				  height: 0;
				  width: 0;
				  border: solid transparent;
				  border-right-color: #eee;
				  border-width: 8px;
				  pointer-events: none;
				}
				#education .description h3{
				  font-size: 1.6em;
				  margin: 0;
				  padding: 0;
				  font-weight: 700;
				}
				#education .description p{
				  font-size: 1.3em;
				  margin-top: 5px;
				  padding: 0;
				}
		      `}</style>
        </Box>
	);
};