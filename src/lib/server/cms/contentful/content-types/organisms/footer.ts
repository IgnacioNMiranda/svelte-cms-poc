import type { ContentType } from '../content-type';

export interface ContentfulFooter extends ContentType {
	copyright: string;
	links: { label: string; url: string }[];
}
