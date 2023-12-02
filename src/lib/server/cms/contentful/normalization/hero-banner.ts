import type { OrHeroBannerProps } from '../../../../components/organisms/or-hero-banner/or-hero-banner.types';
import type { ContentfulHeroBanner } from '../content-types/organisms/hero-banner';

export const normalizeHeroBanner = (heroBanner: ContentfulHeroBanner): OrHeroBannerProps => {
	return {
		title: heroBanner.title,
		asset: {
			src: heroBanner.asset.file.url,
			alt: heroBanner.asset.title
		}
	};
};
