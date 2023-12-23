import { documentToHtmlString, type RenderNode } from '@contentful/rich-text-html-renderer';
import { INLINES, type Document } from '@contentful/rich-text-types';

const renderNode: RenderNode = {
	[INLINES.HYPERLINK]: (node, next) => {
		return `<a class="text-white hover:underline hover:text-[#FDB05A] transition-colors" href=${
			node.data.uri
		}>${next(node.content)}</a>`;
	}
};

export const normalizeRichTextContent = (doc: Document) => {
	return documentToHtmlString(doc, {
		renderNode
	});
};
