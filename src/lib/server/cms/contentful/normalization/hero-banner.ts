import type { OrHeroBannerProps } from '../../../../components/organisms/or-hero-banner/or-hero-banner.types';
import type { TypeHeroBanner } from '../types';
import { normalizeRichTextContent } from './rich-text';

export const normalizeHeroBanner = (
	heroBanner: TypeHeroBanner<'WITHOUT_UNRESOLVABLE_LINKS', string>
): OrHeroBannerProps | null => {
	const asset = heroBanner.fields.asset?.fields.file && {
		src: heroBanner.fields.asset.fields.file.url,
		alt: heroBanner.fields.asset.fields.title
	};
	if (!asset) return null;

	return {
		component: 'heroBanner',
		title: heroBanner.fields.title,
		blurb: heroBanner.fields.blurb ? normalizeRichTextContent(heroBanner.fields.blurb) : '',
		asset,
		assetPosition: heroBanner.fields.assetPosition
	};
};
