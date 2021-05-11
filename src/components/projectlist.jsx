import React from 'react';

import { Link } from 'react-router-dom';
import slug from 'slugify';

export function slugify(...strings) {
	return slug(strings.join(' '), {
		lower: true,
		remove: /[*+~.()'"!:@]/g,
	});
}

const createProject = (key, title, subtitle, mit, twitter, at, website) => ({
	key,
	title,
	subtitle,
	mit,
	twitter,
	at,
	website,
});

export const projects = [
	createProject(
		'b',
		'Yape',
		'Corporate Image and Manual',
		'Silvia Riva',
		'https://twitter.com/SiviRiva',
		'e-Novia',
		'https://www.e-novia.it/'
	),
	createProject(
		'c',
		'Yape',
		'Remote driving interface',
		'many others',
		null,
		'e-Novia',
		null
	),
	createProject(
		'd',
		'Metro de Lima',
		'Branding and wayfinding',
		'Samuel Iuri',
		'https://twitter.com/samueliuri',
		'DD',
		'https://www.discipline.design'
	),

	createProject('e', 'Our Headline', 'Typeface', null, null, null, null),
	createProject(
		'f',
		'CRAF Aldo Moro',
		'Corporate Image and Manual',
		'Maurizio Milani',
		'http://www.designculture.it/interview/maurizio-milani.html',
		'ISAC',
		'https://www.liceoartisticogalvani.edu.it/'
	),
];

export function ProjectList() {
	return projects.map((project) => (
		<div key={project.key}>
			<Link
				className='hover:text-red-500'
				key={project.key}
				to={`/projects/${slugify(project.title)}`}
			>
				<p>{project.title}</p>
				<p>{project.subtitle}</p>
			</Link>
			{isLink(project)}
		</div>
	));
}

export function Discipline() {
	return (
		<div>
			Founder of{' '}
			<a
				href='https://www.discipline.design'
				rel='noreferrer'
				target='_blank'
				className='hover:text-red-500'
			>
				DisciplineDesign
			</a>
			<br />
			design agency in 2008
		</div>
	);
}

export default function ListAnime() {
	return (
		<div className='grid text-4xl font-bold tracking-tighter text-white gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
			<Discipline />

			<ProjectList />
		</div>
	);
}

function isLink(project) {
	if (project.twitter && project.website !== null)
		return (
			<p>
				<span>
					with{' '}
					<a
						className='hover:text-blue-600'
						key={slugify(project.title)}
						rel='noreferrer'
						target='_blank'
						href={project.twitter}
					>
						{project.mit}
					</a>
				</span>{' '}
				at{' '}
				<a
					className='hover:text-green-600'
					key={slugify(project.title)}
					target='_blank'
					rel='noopener noreferrer'
					href={project.website}
				>
					{project.at}
				</a>
			</p>
		);
	else if (project.twitter === null && project.at !== null)
		return (
			<p>
				<span>with {project.mit}</span> at{' '}
				<a
					className='hover:text-green-600'
					key={slugify(project.title)}
					target='_blank'
					rel='noopener noreferrer'
					href={project.website}
				>
					{project.at}
				</a>
			</p>
		);
	else if (
		project.mit &&
		project.twitter &&
		project.at &&
		project.website === null
	)
		return null;
}
