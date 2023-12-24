import type { OrFooterProps } from '../../../../components/organisms/or-footer/or-footer.types';
import type { TypeFooter } from '../types';
import { normalizeJsonLinks } from './json-links';

export const normalizeFooter = (
	footer: TypeFooter<'WITHOUT_UNRESOLVABLE_LINKS', string>
): OrFooterProps => {
	return {
		component: 'footer',
		copyright: footer.fields.copyright,
		links: normalizeJsonLinks(footer.fields.links)
	};
};
