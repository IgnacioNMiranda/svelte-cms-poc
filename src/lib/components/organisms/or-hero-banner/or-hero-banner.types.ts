export interface OrHeroBannerProps {
	title: string;
	// 'blurb' field comes as HTML
	blurb: string;
	asset: {
		src: string;
		alt?: string;
	};
	assetPosition: 'left' | 'right';
}
