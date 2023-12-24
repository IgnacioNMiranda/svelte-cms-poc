import type { Link } from '../../common/types';
import type { ComponentProps } from '../../component-props';

export interface OrFooterProps extends ComponentProps<'footer'> {
	copyright: string;
	links: Link[];
}
