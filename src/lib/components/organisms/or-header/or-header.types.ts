import type { ComponentProps } from '../../component-props';

export interface OrHeaderProps extends ComponentProps<'header'> {
	logoTitle: string;
	logoUrl: string;
	links: { label: string; url: string }[];
}
