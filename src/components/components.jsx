import React from 'react';
import { Link } from 'react-router-dom';
import CN from 'classnames';

export const ProTitle = (props) => (
	<div className=''>
		<div className={CN(props.div)}>
			<Link to={props.to} className=' hover:text-red-400'>
				<div className=' '>{props.title}</div>
				<div>{props.subtitle} </div>
			</Link>
			<div className={CN(props.class)}>
				with{' '}{props.with}
				<a
					href={props.twitter}
					className='hover:text-blue-600'
					target='_blank'
					rel='noopener noreferrer'>
					{props.name}
				</a>{' '}
				<span className={props.span}>
					at {props.where}
					<a
						href={props.web}
						className={CN('hover:text-green-600', props.link)}
						target='_blank'
						rel='noopener noreferrer'>
						{props.company}
					</a>
				</span>
			</div>
		</div>
		{props.children}
	</div>
);

// <a href={props.link} target='_blank' rel='noopener noreferrer'>
