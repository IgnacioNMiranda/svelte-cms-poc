import type { ISbStoryData } from '@storyblok/js';
import type { PgPageProps } from '../../../components/page.types';
import type { PageStoryblok } from './types';
import { normalizeFooterStoryblok } from './normalization/footer';
import { normalizeHeaderStoryblok } from './normalization/header';
import { normalizeHeroBannerStoryblok } from './normalization/hero-banner';

export const storyblokPageStoryToProps = (
	story: ISbStoryData<PageStoryblok>
): PgPageProps | null => {
	const header =
		typeof story.content.header !== 'string' &&
		normalizeHeaderStoryblok(story.content.header.content);
	const footer =
		typeof story.content.footer !== 'string' &&
		normalizeFooterStoryblok(story.content.footer.content);

	if (!footer || !header) return null;

	const props: PgPageProps = {
		component: 'page',
		title: story.content.Title,
		slug: story.full_slug,
		header,
		template: {
			component: 'templateFlex',
			type: 'flex',
			blocks: story.content.template[0].blocks
				.map((block) => {
					if (typeof block !== 'string') {
						if (block.component === 'heroBanner') return normalizeHeroBannerStoryblok(block);
					}
					return null;
				})
				.filter(Boolean) as PgPageProps['template']['blocks']
		},
		footer
	};
	return props;
};
