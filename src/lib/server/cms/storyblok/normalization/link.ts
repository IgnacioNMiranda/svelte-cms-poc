import type { LinkStoryblok } from '../types';

export const normalizeLinkStoryblok = (link: LinkStoryblok) => {
	return { label: link.label, url: link.url };
};
