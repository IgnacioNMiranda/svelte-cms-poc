export interface ContentfulAsset {
	title: string;
	file: {
		url: string;
		details: {
			image: {
				width: number;
				height: number;
			};
		};
	};
}
