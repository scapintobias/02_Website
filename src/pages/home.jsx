import React from 'react';
import { Main, Header } from '../components/components';
import ListAnime from '../components/projectlist';

export default function Home() {
	return (
		<Main>
			<Header />
			<div className='space-y-2 h-80' />
			<div className='text-white text-6xl font-bold'>Projects</div>
			<div className='space-y-2 h-32' />
			<ListAnime />
		</Main>
	);
}
