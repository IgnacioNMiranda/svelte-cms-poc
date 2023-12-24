import { RichTextSchema, renderRichText } from '@storyblok/js';
import type { RichtextStoryblok } from '../types';
import cloneDeep from 'clone-deep';

const schema = cloneDeep(RichTextSchema);
schema.marks.link = (node) => {
	const object = RichTextSchema.marks.link(node);
	if ('tag' in object && Array.isArray(object.tag))
		return {
			...object,
			tag: [
				{
					...object.tag[0],
					attrs: {
						...object.tag[0].attrs,
						class: 'text-white hover:underline hover:text-[#FDB05A] transition-colors',
						target: object.tag[0].attrs.href.startsWith('http') ? '_blank' : '_self'
					}
				}
			]
		};
	return object;
};

export const normalizeRichTextStoryblok = (richText?: RichtextStoryblok) => {
	if (!richText) return '';

	return renderRichText(richText, {
		schema,
		resolver: (component, blok) => {
			console.log(component, blok);
			switch (component) {
				case 'my-custom-component':
					return `<div class="my-component-class">${blok.text}</div>`;
				default:
					return 'Resolver not defined';
			}
		}
	});
};
