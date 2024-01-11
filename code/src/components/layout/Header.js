import React from 'react';

export const Header = ({...data}) => {
	return (
		<div id="photo-header" className="text-center">
			<div id="photo">
				<img src="img/avatar.jpg" alt="avatar" />
			</div>
			<div id="text-header">
				<h1>Hi,<br /> my name is <span>{data.name}</span>.</h1>
			</div>
			<style jsx="true">{`
				#photo-header{
				  margin-top: -75px;
				}
				#photo{
				  width: 160px;
				  height: 160px;
				  border-radius: 50%;
				  overflow: hidden;
				  padding: 5px;
				  background: #ededed;
				  display: inline-block;
				}
				#photo img{
				  width: 150px;
				  height: 150px;
				  border-radius: 50%;
				}
				#text-header h1{
				  margin: 0;
				  padding: 0;
				  font-size: 2.4em;
				  font-weight: 700;
				  text-transform: uppercase;
				  letter-spacing: -1px;
				}
				#text-header h1::first-line{
				  font-size: 1.5em;
				  letter-spacing: -4px;
				  font-weight: 800;
				  line-height: 1.5em;
				}
				#text-header h1 span{
				  color: #49CC66;
				}
				#text-header h1 sup{
				  opacity: 0.5;
				}
				#text-header:after{
				  width: 100%;
				  height: 3px;
				  background: url(../img/line.png);
				  margin-top: 15px;
				  content: '';
				  display: block;
				}
			`}</style>
		</div>
	);
};