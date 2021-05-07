import React from 'react';

import { ProjectList } from '../components/projectlist';

export default function Home() {
	return (
		<>
			<div className='bg-gray-900 min-h-screen p-4 tracking-tighter'>
				<h1 className=' text-6xl text-white font-bold mx-auto '>
					<span className='text-transparent tracking-tighter bg-gradient-to-r bg-clip-text from-blue-500 to bg-green-500 '>
						TMGS
					</span>
				</h1>
				<div className='space-y-2 h-80' />
				<div className='text-white text-6xl font-bold'>Projects</div>

				<div className='space-y-2 h-32' />
				<div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-white text-4xl tracking-tighter font-bold mb-8'>
					<div>
						Founder of{' '}
						<a
							href='https://www.discipline.design'
							rel='noreferrer'
							target='_blank'
							className='hover:text-red-500'>
							DisciplineDesign
						</a>{' '}
						design agency in 2008
					</div>
					<ProjectList />
				</div>
			</div>
		</>
	);
}
