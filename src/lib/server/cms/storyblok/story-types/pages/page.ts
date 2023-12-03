import type { ComponentType } from '../../component-type';

export interface StoryblokPage extends ComponentType {
	title: string;
	slug: string;
	// header: ContentfulHeader;
	// template: ContentfulTemplate;
	// footer: ContentfulFooter;
}
