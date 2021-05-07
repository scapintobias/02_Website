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
];

console.log(projects.map((project) => project.twitter));

function isLink() {
	const hrel = projects.map((project) => project.twitter === null);

	if (hrel === true)
		return projects.map((project) => <span>{project.twitter}</span>);
	else if (hrel === false) return <span>NULL</span>;
}

console.log(isLink);

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
			<p>
				{isLink()}
				{/* with{' '}
				<a
					href={project.twitter}
					className='hover:text-blue-600'
					target='_blank'
					rel='noopener noreferrer'>
					{project.mit}
				</a>{' '}
				at{' '}
				<a
					href={project.website}
					className='hover:text-green-600'
					target='_blank'
					rel='noopener noreferrer'>
					{project.at}
				</a>
			</p>
			<p>
				 */}
			</p>
		</div>
	));
}
