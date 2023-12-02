import type { ContentfulAsset } from '../asset';
import type { ContentType } from '../content-type';
import type { Document } from '@contentful/rich-text-types';

export interface ContentfulHeroBanner extends ContentType {
	title: string;
	blurb?: Document;
	asset: ContentfulAsset;
	assetPosition: 'left' | 'right';
}
