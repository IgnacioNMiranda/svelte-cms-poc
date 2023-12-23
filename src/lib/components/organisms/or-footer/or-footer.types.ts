import type { ComponentProps } from '../../component-props';

export interface OrFooterProps extends ComponentProps<'footer'> {
	copyright: string;
	links: { label: string; url: string }[];
}
