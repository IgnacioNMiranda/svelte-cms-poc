import { getClient } from './client';
import type { PgPageProps } from '../../../components/page.types';
import { contentfulPageToProps } from './page-to-props';
import type { TypePageSkeleton } from './types';
import type { EntrySkeletonType } from 'contentful';

const getEntries = async <T extends EntrySkeletonType>(
	contentType: string,
	query?: Record<string, unknown>
) => {
	const result = await getClient().getEntries<T>({
		content_type: contentType,
		...query
	});

	return result;
};

const getPageEntries = (query: Record<string, unknown>) => {
	return getEntries<TypePageSkeleton>('page', query);
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

export const getPageBySlug = async (slug: string): Promise<PgPageProps | null> => {
	const collection = await getPageEntries({
		'fields.slug': slug === 'index' ? '/' : slug,
		include: 10
	});

	const page = collection?.items && collection.items?.length ? collection.items[0] : null;

	if (page) {
		return contentfulPageToProps(page);
	}
	return null;
};
