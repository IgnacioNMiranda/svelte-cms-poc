import type { OrFooterProps } from '../../../../components/organisms/or-footer/or-footer.types';
import type { FooterStoryblok } from '../types';
import { normalizeLinkStoryblok } from './link';

export const normalizeFooterStoryblok = (footer: FooterStoryblok): OrFooterProps => {
	return {
		component: 'footer',
		copyright: footer.copyright,
		links: footer.links.map(normalizeLinkStoryblok)
	};
};
