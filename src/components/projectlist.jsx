import { Link } from 'react-router-dom';
import slug from 'slugify';

export function slugify(...strings) {
	return slug(strings.join(' '), {
		lower: true,
		remove: /[*+~.()'"!:@]/g,
	});
}

const createProject = (title, subtitle, mit, twitter, at, website) => ({
	title,
	subtitle,
	mit,
	twitter,
	at,
	website,
});

const projects = [
	createProject(
		'Yape',
		'Corporate Image and Manual',
		'Silvia Riva',
		'https://twitter.com/SiviRiva',
		'e-Novia',
		'https://www.e-novia.it/',
	),
	createProject(
		'Yape',
		'Remote driving interface',
		'many others',
		null,
		'e-Novia',
		null,
	),
	createProject(
		'Metro de Lima',
		'Branding and wayfinding',
		'Samuel Iuri',
		'https://twitter.com/samueliuri',
		'DD',
		'https://www.discipline.design',
	),

	createProject('Our Headline', 'Typeface', null, null, null, null),
	createProject(
		'CRAF Aldo Moro',
		'Corporate Image and Manual',
		'Maurizio Milani',
		'http://www.designculture.it/interview/maurizio-milani.html',
		'ISAC',
		'https://www.liceoartisticogalvani.edu.it/',
	),
];

export function ProjectList() {
	return projects.map((project) => (
		<div>
			<Link
				className='hover:text-red-500'
				key={slugify(project.title)}
				to={`/projects/${slugify(project.title)}`}>
				<p>{project.title}</p>
				<p>{project.subtitle}</p>
			</Link>
			{isLink(project)}
		</div>
	));
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
						href={project.twitter}>
						{project.mit}
					</a>
				</span>{' '}
				at{' '}
				<a
					className='hover:text-green-600'
					key={slugify(project.title)}
					target='_blank'
					rel='noopener noreferrer'
					href={project.website}>
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
					href={project.website}>
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
