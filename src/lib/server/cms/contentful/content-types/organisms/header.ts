import type { ContentType } from '../content-type';

export interface ContentfulHeader extends ContentType {
	logoTitle: string;
	logoUrl: string;
	links: { label: string; url: string }[];
}
