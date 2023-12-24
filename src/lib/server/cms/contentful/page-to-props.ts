import type { PgPageProps } from '../../../components/page.types';
import type { TmFlexProps } from '../../../components/templates/tm-flex/tm-flex.types';
import type { TypePage } from './types';

import { normalizeHeroBanner } from './normalization/hero-banner';
import { normalizeFooter } from './normalization/footer';
import { normalizeHeader } from './normalization/header';

export const contentfulPageToProps = (
	page: TypePage<'WITHOUT_UNRESOLVABLE_LINKS', string>
): PgPageProps | null => {
	if (!page.fields.header || !page.fields.footer || !page.fields.template) return null;

	const pageProps: PgPageProps = {
		component: 'page',
		title: page.fields.title,
		slug: page.fields.slug,
		header: normalizeHeader(page.fields.header),
		template: {
			component: 'templateFlex',
			type: page.fields.template.sys.contentType.sys.id === 'templateFlex' ? 'flex' : 'flex',
			blocks: page.fields.template.fields.blocks
				.map((block) => {
					if (block?.sys.contentType.sys.id === 'heroBanner') return normalizeHeroBanner(block);
					return null;
				})
				.filter(Boolean) as TmFlexProps['blocks']
		},
		footer: normalizeFooter(page.fields.footer)
	};
	return pageProps;
};
