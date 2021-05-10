import React from 'react';
import { Back } from '../components/components';

export default function Yape() {
	return (
		<section className='flex flex-col w-screen font-sans tracking-tighter'>
			<Back />
			<section className='flex flex-col justify-center min-h-screen snap-start snap-y snap-mandatory'>
				<img
					src='/img/droplets.jpeg'
					alt=''
					className='absolute z-0 min-w-full min-h-screen'
				/>
				<div className='z-20 font-black text-white text-9xl tracking-title'>
					Yape
				</div>
			</section>
			<section className='z-20 flex min-h-screen bg-blue-900 snap snap-y snap-start snap-mandatory'>
				<div className='flex flex-col w-screen min-h-screen'>
					<p className='w-7/12 mb-40 font-black text-white text-9xl'>
						Yape is a robot, who transports goods around cities and buildings in
						a safe and sustainable way.
					</p>
					<p className='text-white text-9xl'>In 2018 it needed a new logo.</p>
				</div>
			</section>
			<section className='z-20 flex flex-col justify-center min-h-screen bg-blue-800 snap snap-start snap-y snap-mandatory '>
				<div className='font-black text-white text-9xl'>Tria</div>
			</section>
		</section>
	);
}
