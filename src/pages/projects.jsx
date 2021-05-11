import React from 'react';
import { Back, Background } from '../components/components';
import ReactSnapScroll from '../components/scroll';
export default function Yape() {
	return (
		<ReactSnapScroll transition='move-top-bottom-stagger'>
			<Background url='/img/solen-feyissa-l0RVpbmcfmk-unsplash.jpg'>
				<Back />
			</Background>
			<Background url='/img/drops.jpeg' />
		</ReactSnapScroll>
	);
}
