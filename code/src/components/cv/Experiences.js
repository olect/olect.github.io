import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Box } from '../layout';

const CustomToggle = ({ children, eventKey }) => {
	const [toggle, setToggle] = useState(false);
  	const decoratedOnClick = useAccordionButton(eventKey, () =>
    	console.log('totally custom!'),
  	);

  return (
    <div
      className={`header-button px-0 container mt-0 ${toggle?'collapsed':''}`}
      onClick={() => { decoratedOnClick(); setToggle(!toggle); }}
    >
      {children}
      <style jsx="true">{`
		 	.header-button:not(.collapsed)::after {
		 		background-image: var(--bs-accordion-btn-active-icon);
				transform: var(--bs-accordion-btn-icon-transform);
		 	}
		 	.header-button:after {
		 		position: absolute;
		 		right: 0;
		 		flex-shrink: 0;
				width: var(--bs-accordion-btn-icon-width);
				height: var(--bs-accordion-btn-icon-width);
				margin-left: auto;
				content: "";
				background-image: var(--bs-accordion-btn-icon);
				background-repeat: no-repeat;
				background-size: var(--bs-accordion-btn-icon-width);
				transition: var(--bs-accordion-btn-icon-transition);
		 	}
		 	.header-button {
		 		cursor: pointer;
		 		position: relative;
				display: flex;
				align-items: center;
				width: 100%;
				font-size: 1rem;
				color: var(--bs-accordion-btn-color);
				text-align: left;
				background-color: var(--bs-accordion-btn-bg);
				border: 0;
				border-radius: 0;
				overflow-anchor: none;
				transition: var(--bs-accordion-transition);
		 	}
		`}</style>
    </div>
  );
}

export const Experiences = ({...data}) => {
	const experiences = data?.experience?.reverse() || [];

	return (
		<Box title="Experience">
			<Accordion defaultActiveKey="0" className="experience">
				{experiences && experiences.map((work,i) =>
					<div className="job mb-4" key={`experience-${i}`}>
			        	<CustomToggle eventKey={i}>
			        		<div className="row">
				        		<div className="col-12 col-lg-3">
						          <div className="where">{work.company}, <span className="location">{work.location}</span></div>
						          <div className="year">{work.from} - {work.to}</div>
						        </div>
						        <div className="col-12 col-lg-9">
						          <div className="profession pe-4">{work.position}</div>
						          <div className="about py-1 pe-4">{work.about}</div>
						          {work.description && <div className="description pe-4">{work.description}</div> }
						          <hr />
						        </div>
						        </div>
				        	</CustomToggle>
				        <Accordion.Collapse eventKey={i}>
				        	<div className="row">
								<div className="col-0 col-lg-3"></div>
							  	<div className="col-12 col-lg-9">
							        {work.jobs && work.jobs.length > 0 &&
							          	<>
							          	<h4>What</h4>
							          	<ul className="jobs">
							          		{work.jobs.map((job, i) => 
								            	<li className="job" key={`job-${i}`}><p>{job}</p></li>
								            )}
							          	</ul>
							          	</>
						      		}
						        	{work.techstack && work.techstack.length > 0 &&
						        		<>
						        		<h4>How</h4>
						        		<ul className="meta">
						        			{work.techstack.map((tech, i) => 
						        				<li key={`tech-${i}`}>
						        					<p><strong>{tech.label}</strong>: {tech.description}</p>
						        				</li>
						        			)}
						        		</ul>
						        		</>
						        	}
						        	{work.projects && work.projects.length > 0 &&
						        		<>
						        		<h4>Results</h4>
						        		<ul className="projects">
						        			{work.projects.map((project,i) => 
						        				<li key={`project-${i}`}>
						        					{project.link &&
						        						<p><a href={project.link.href} title={project.link.title}>{project.link.title}</a>, {project.description}</p>
						        					}
						        					{!project.link &&
						        						<p><strong>{project.label}</strong>, {project.description}</p>
						        					}
						        				</li>
						        			)}
						        		</ul>
						        		</>
						        	}
							    </div>
							</div>
			        	</Accordion.Collapse>
			        </div>
				)}
			</Accordion>
			<style jsx="true">{`
			 	.header-button:not(.collapsed)::after {
			 		background-image: var(--bs-accordion-btn-active-icon);
					transform: var(--bs-accordion-btn-icon-transform);
			 	}
			 	.header-button:after {
			 		flex-shrink: 0;
					width: var(--bs-accordion-btn-icon-width);
					height: var(--bs-accordion-btn-icon-width);
					margin-left: auto;
					content: "";
					background-image: var(--bs-accordion-btn-icon);
					background-repeat: no-repeat;
					background-size: var(--bs-accordion-btn-icon-width);
					transition: var(--bs-accordion-btn-icon-transition);
			 	}
		    	.meta, .projects {
					//margin-bottom: 15px;
					list-style: none;
					padding-left: 12px;
				}
				h4 {
					font-size: 14px;
					font-weight: bold;
				}
				.job li p { margin: 0;}
				.job .where{
					font-size: 1.4em;
					font-weight: bold;
				}
				.job .year{
					font-size: 1.3em;
					opacity: 0.7;
				}
				.job .profession{
					font-size: 1.6em;
					font-weight: bold;
				}
				.job .description{
					font-size: 1.2em;
					line-height: 1.5em;
				}
		      `}</style>
        </Box>
	)
}