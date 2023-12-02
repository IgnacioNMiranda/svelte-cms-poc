import type { ContentfulHeader } from '../organisms/header';

export interface ContentfulPage {
	title: string;
	slug: string;
	header: ContentfulHeader;
}
