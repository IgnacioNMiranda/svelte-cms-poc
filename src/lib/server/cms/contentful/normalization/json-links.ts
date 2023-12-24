import type { EntryFieldTypes } from 'contentful';
import type { Link } from '../../../../components/common/types';

export const normalizeJsonLinks = (links?: EntryFieldTypes.Object['data']): Link[] => {
	if (Array.isArray(links))
		return links
			.map((link) => {
				if (!!link && typeof link === 'object' && !Array.isArray(link) && 'url' in link)
					return {
						url: link.url as string,
						label: (link.label as string) ?? ''
					};
			})
			.filter(Boolean) as Link[];
	return [];
};
