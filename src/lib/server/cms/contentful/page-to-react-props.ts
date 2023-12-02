import type { PgPageProps } from '../../../components/page.types';
import type { TmFlexProps } from '../../../components/templates/tm-flex/tm-flex.types';
import type { ContentfulPage } from './content-types/pages/page';
import { normalizeHeroBanner } from './normalization/hero-banner';

export const contentfulPageToReactProps = (page: ContentfulPage): PgPageProps => {
	return {
		title: page.title,
		slug: page.slug,
		header: {},
		template: {
			type: page.template.cmsType === 'templateFlex' ? 'flex' : 'flex',
			title: page.title,
			blocks: page.template.blocks
				.map((block) => {
					if (block.cmsId === 'heroBanner') return normalizeHeroBanner(block);
					return null;
				})
				.filter(Boolean) as TmFlexProps['blocks'],
			slug: page.slug
		},
		footer: {
			copyright: page.footer.copyright,
			links: page.footer.links
		}
	};
};
