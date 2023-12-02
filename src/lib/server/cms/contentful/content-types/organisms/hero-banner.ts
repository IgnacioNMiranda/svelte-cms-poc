import type { ContentfulAsset } from '../asset';
import type { ContentType } from '../content-type';

export interface ContentfulHeroBanner extends ContentType {
	title: string;
	asset: ContentfulAsset;
}
