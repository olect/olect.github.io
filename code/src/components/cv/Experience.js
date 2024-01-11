import React from 'react';

export const Experience = ({work}) => {
	return (
		<div className="job clearfix mb-5">
			<div className="row">
				<div className="col-3">
          <div className="where">{work.company}, <span className="location">{work.location}</span></div>
          <div className="year">{work.from} - {work.to}</div>
        </div>
        <div className="col-9">
          <div className="profession">{work.position}</div>
          <div className="about py-1">{work.about}</div>
          {work.description && <div className="description">{work.description}</div> }
          <hr />
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
          
      <style jsx="true">{`
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
        </div>
	);	
};