import type { OrHeroBannerProps } from '../../../../components/organisms/or-hero-banner/or-hero-banner.types';
import type { HeroBannerStoryblok } from '../types';
import { renderRichText } from '@storyblok/js';

export const normalizeHeroBannerStoryblok = (
	heroBanner: HeroBannerStoryblok
): OrHeroBannerProps => {
	return {
		component: 'heroBanner',
		title: heroBanner.title,
		blurb: renderRichText(heroBanner.blurb),
		asset: {
			src: heroBanner.asset.filename,
			alt: heroBanner.asset.alt
		},
		assetPosition: heroBanner.assetPosition || 'left'
	};
};
