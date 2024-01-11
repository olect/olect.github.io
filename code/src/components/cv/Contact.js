import React from 'react';
import { Box } from '../layout';

export const Contact = ({...data}) => {
	return (
		<Box classNames={['clearfix', 'bg-white']} >
            <div className="contact-item">
              <div className="icon float-start text-center"><span className="fa fa-phone fa-fw"></span></div>
              <div className="title only float-end"><a href={`tel:${data.contact.phone}`} title="Call me">{data.contact.phone}</a></div>
            </div>
            <div className="contact-item">
              <div className="icon float-start text-center"><span className="fa fa-envelope fa-fw"></span></div>
              <div className="title only float-end"><a href={`mailto:${data.contact.email}`} title="Send me email">{data.contact.email}</a></div>
            </div>
            <div className="contact-item">
              <div className="icon float-start text-center"><span className="fa fa-brands fa-linkedin fa-fw"></span></div>
              <div className="title float-end">Linkedin</div>
              <div className="description float-end"><a href={data.contact.linkedin}>{data.contact.linkedin}</a></div>
            </div>
            <div className="contact-item">
              <div className="icon float-start text-center"><span className="fa fa-brands fa-twitter fa-fw"></span></div>
              <div className="title float-end">Twitter</div>
              <div className="description float-end"><a href={data.contact.twitter}>{data.contact.twitter}</a></div>
            </div>
            <div className="contact-item">
              <div className="icon float-start text-center"><span className="fa fa-brands fa-instagram fa-fw"></span></div>
              <div className="title float-end">Instagram</div>
              <div className="description float-end"><a href={data.contact.instagram}>{data.contact.instagram}</a></div>
            </div>
            <div className="contact-item">
              <div className="icon float-start text-center"><span className="fa fa-brands fa-github fa-fw"></span></div>
              <div className="title float-end">Github</div>
              <div className="description float-end"><a href={data.contact.github}>{data.contact.github}</a></div>
            </div>
            <style jsx="true">{`
            	.contact-item{
								  width: 100%;
								  float: left;
								}
								.contact-item .icon{
								  padding: 10px;
								  border-right: 1px solid #aaa;
								  border-bottom: 1px solid #aaa;
								  opacity: 0.2;
								}
								.contact-item .icon svg {
									width: 20px !important;
									height: 20px !important;
								}
								.contact-item:last-child .icon{
								  border-bottom: none;
								}
								.contact-item .fa{
								  font-size: 2em;
								}
								.contact-item .title{
								  width: 80%;
								  width: calc(100% - 55px);
								  font-size: 14px;
								  font-weight: 700;
								  opacity: 0.9;
								}
								.contact-item .title.only{
								  margin-top: 7px;
								}
								.contact-item .description{
								  width: 80%;
								  width: calc(100% - 55px);
								  font-size: 12px;
								  opacity: 0.7;
								}
            `}</style>
        </Box>
	)
}