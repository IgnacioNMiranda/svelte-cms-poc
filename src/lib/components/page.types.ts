import type { ComponentProps } from './component-props';
import type { OrFooterProps } from './organisms/or-footer/or-footer.types';
import type { OrHeaderProps } from './organisms/or-header/or-header.types';
import type { TmFlexProps } from './templates/tm-flex/tm-flex.types';

export interface PgPageProps extends ComponentProps<'page'> {
	title: string;
	slug: string;
	header: OrHeaderProps;
	template: { type: 'flex' } & TmFlexProps;
	footer: OrFooterProps;
}
