import type { OrHeaderProps } from '../../../../components/organisms/or-header/or-header.types';
import type { HeaderStoryblok } from '../types';
import { normalizeLinkStoryblok } from './link';

export const normalizeHeaderStoryblok = (header: HeaderStoryblok): OrHeaderProps => {
	return {
		component: 'header',
		logoTitle: header.logo_title,
		logoUrl: header.logo_url.url,
		links: header.links.map(normalizeLinkStoryblok)
	};
};
