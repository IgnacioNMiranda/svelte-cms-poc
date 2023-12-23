import { cleanContentfulEntry } from './normalization/clean-contentful-entry';
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

	return items.map((item) => {
		let slug = item.fields.slug as string;

		if (item.fields.slug === '/') slug = 'index';
		else if (item.fields.slug === 'notFound') slug = '404';
		else if (item.fields.slug === 'serverError') slug = '500';

		return { slug };
	});
};

export const getPageBySlug = async (slug: string): Promise<ContentfulPage | null> => {
	const collection = await getPageEntries({
		'fields.slug': slug === 'index' ? '/' : slug,
		include: 10
	});

	const page = collection?.items && collection.items?.length ? collection.items[0] : null;

	if (page) {
		return cleanContentfulEntry(page) as ContentfulPage;
	}
	return null;
};
