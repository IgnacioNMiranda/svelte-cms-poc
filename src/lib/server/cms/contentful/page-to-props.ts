import type { PgPageProps } from '../../../components/page.types';
import type { TmFlexProps } from '../../../components/templates/tm-flex/tm-flex.types';
import type { ContentfulPage } from './content-types/pages/page';
import { normalizeHeroBanner } from './normalization/hero-banner';

export const contentfulPageToProps = (page: ContentfulPage): PgPageProps => {
	const pageProps: PgPageProps = {
		title: page.title,
		slug: page.slug,
		header: {
			logoTitle: page.header.logoTitle,
			logoUrl: page.header.logoUrl,
			links: page.header.links
		},
		template: {
			type: page.template.cmsType === 'templateFlex' ? 'flex' : 'flex',
			blocks: page.template.blocks
				.map((block) => {
					if (block.cmsType === 'heroBanner') return normalizeHeroBanner(block);
					return null;
				})
				.filter(Boolean) as TmFlexProps['blocks']
		},
		footer: {
			copyright: page.footer.copyright,
			links: page.footer.links
		}
	};
	return pageProps;
};
