import type { OrHeroBannerProps } from '../../../../components/organisms/or-hero-banner/or-hero-banner.types';
import type { ContentfulHeroBanner } from '../content-types/organisms/hero-banner';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { INLINES } from '@contentful/rich-text-types';

export const normalizeHeroBanner = (heroBanner: ContentfulHeroBanner): OrHeroBannerProps => {
	return {
		title: heroBanner.title,
		blurb: heroBanner.blurb
			? documentToHtmlString(heroBanner.blurb, {
					renderNode: {
						[INLINES.HYPERLINK]: (node, next) => {
							return `<a class="text-white hover:underline hover:text-[#FDB05A] transition-colors" href=${
								node.data.uri
							}>${next(node.content)}</a>`;
						}
					}
			  })
			: '',
		asset: {
			src: heroBanner.asset.file.url,
			alt: heroBanner.asset.title
		},
		assetPosition: heroBanner.assetPosition
	};
};
