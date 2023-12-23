import type { OrHeroBannerProps } from '../../../../components/organisms/or-hero-banner/or-hero-banner.types';
import type { ContentfulHeroBanner } from '../content-types/organisms/hero-banner';
import { normalizeRichTextContent } from './rich-text';

export const normalizeHeroBanner = (heroBanner: ContentfulHeroBanner): OrHeroBannerProps => {
	return {
		component: 'heroBanner',
		title: heroBanner.title,
		blurb: heroBanner.blurb ? normalizeRichTextContent(heroBanner.blurb) : '',
		asset: {
			src: heroBanner.asset.file.url,
			alt: heroBanner.asset.title
		},
		assetPosition: heroBanner.assetPosition
	};
};
