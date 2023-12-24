import type { OrHeaderProps } from '../../../../components/organisms/or-header/or-header.types';
import type { TypeHeader } from '../types';
import { normalizeJsonLinks } from './json-links';

export const normalizeHeader = (
	header: TypeHeader<'WITHOUT_UNRESOLVABLE_LINKS', string>
): OrHeaderProps => {
	return {
		component: 'header',
		logoTitle: header.fields.logoTitle,
		logoUrl: header.fields.logoUrl,
		links: normalizeJsonLinks(header.fields.links)
	};
};
