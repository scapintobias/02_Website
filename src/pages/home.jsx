import React from 'react';
import { ProTitle } from '../components/components';
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
					<ProTitle
						to='/'
						title='Yape'
						subtitle='Corporate Image and Manual'
						//class="hidden"
						twitter='https://twitter.com/SiviRiva'
						name='Silvia Riva'
						//clas="hidden"
						web='https://www.e-novia.it'
						company='e-Novia'
					/>
					<ProTitle
						to='/'
						title='Yape'
						subtitle='Remote driving interface'
						with='many others'
						web='https://www.e-novia.it'
						company='e-Novia'
					/>
					<ProTitle
						to='/'
						title='Metro de Lima'
						subtitle='Branding and wayfinding'
						//class="hidden"
						twitter='https://twitter.com/samueliuri'
						name='Samuel Iuri'
						//clas="hidden"
						web='https://www.discipline.design'
						company='DD'
					/>
					<ProTitle
						to='/'
						title='Our Headline'
						subtitle='Type Design'
						class='hidden'
						twitter='https://twitter.com/samueliuri'
						name='Samuel Iuri'
						//clas="hidden"
						web='https://www.discipline.design'
						company='DD'
					/>
					<ProTitle
						to='/'
						title='Craf Aldo Moro'
						subtitle='Corporate Image and Manual'
						//class="hidden"
						link='http://www.designculture.it/interview/maurizio-milani.html'
						name='Maurizio Milani'
						where='ISAC'
					/>
					<ProTitle div='hidden'>
						Founder of{' '}
						<a
							href='https://www.discipline.design'
							rel='noreferrer'
							target='_blank'
							className='hover:text-red-500'>
							DisciplineDesign
						</a>{' '}
						design agency in 2008
					</ProTitle>
				</div>
				<div className='space-y-2 h-32' />
				<div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-white text-4xl tracking-tighter font-bold mb-8'>
					<ProjectList />
				</div>
			</div>
		</>
	);
}
