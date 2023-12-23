import type { ComponentProps } from '../../component-props';

export interface OrHeroBannerProps extends ComponentProps<'heroBanner'> {
	title: string;
	// 'blurb' field comes as HTML
	blurb: string;
	asset: {
		src: string;
		alt?: string;
	};
	assetPosition: 'left' | 'right';
}
