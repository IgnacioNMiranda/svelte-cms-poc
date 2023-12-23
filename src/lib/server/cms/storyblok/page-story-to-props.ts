import type { ISbStoryData } from '@storyblok/js';
import type { PgPageProps } from '../../../components/page.types';
import type { PageStoryblok } from './types';
import { normalizeFooterStoryblok } from './normalization/footer';
import { normalizeHeaderStoryblok } from './normalization/header';
import { normalizeHeroBannerStoryblok } from './normalization/hero-banner';

export const storyblokPageStoryToProps = (story: ISbStoryData<PageStoryblok>): PgPageProps => {
	const props: PgPageProps = {
		component: 'page',
		title: story.content.Title,
		slug: story.full_slug,
		header: normalizeHeaderStoryblok(story.content.header[0]),
		template: {
			component: 'templateFlex',
			type: 'flex',
			blocks: story.content.template[0].blocks
				.map((block) => {
					if (block.component === 'heroBanner') return normalizeHeroBannerStoryblok(block);
					return null;
				})
				.filter(Boolean) as PgPageProps['template']['blocks']
		},
		footer: normalizeFooterStoryblok(story.content.footer[0])
	};
	return props;
};
