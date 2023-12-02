import type { ContentType } from '../content-type';
import type { ContentfulFooter } from '../organisms/footer';
import type { ContentfulHeader } from '../organisms/header';
import type { ContentfulTemplate } from '../templates/template';

export interface ContentfulPage extends ContentType {
	title: string;
	slug: string;
	header: ContentfulHeader;
	template: ContentfulTemplate;
	footer: ContentfulFooter;
}
