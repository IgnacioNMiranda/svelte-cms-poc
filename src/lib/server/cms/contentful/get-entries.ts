import { cleanContentfulEntry } from './normalize';
import { getClient } from './client';
import type { ContentfulPage } from './content-types/pages/page';

const getEntries = async (contentType: string, query?: Record<string, unknown>) => {
	const result = await getClient().getEntries({
		content_type: contentType,
		...query
	});

	return result;
};

const getPageEntries = (query: Record<string, unknown>) => {
	return getEntries('page', query);
};

export const getAllSlugs = async () => {
	const { items } = await getPageEntries({
		select: 'fields.slug'
	});

	return items.map((item) => item.fields.slug);
};

export const getPageBySlug = async (slug: string): Promise<ContentfulPage | null> => {
	const collection = await getPageEntries({ 'fields.slug': slug, include: 10 });

	const page = collection?.items && collection.items?.length ? collection.items[0] : null;

	if (page) {
		return cleanContentfulEntry(page) as ContentfulPage;
	}
	return null;
};
