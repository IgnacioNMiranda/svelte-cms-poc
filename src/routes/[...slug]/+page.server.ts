import { getPage } from '$lib/server/cms/get-page';
import { error } from '@sveltejs/kit';
import { getAllSlugs } from '../../lib/server/cms/contentful/get-entries.js';

/** @type {import('./$types').EntryGenerator} */ export async function entries() {
	const slugs = await getAllSlugs();
	return slugs.map((slug) => ({ slug }));
}

/** @type {import('./$types').PageServerLoad} */ export async function load({ params }) {
	const slug = params.slug || '/';

	const page = await getPage(slug);

	if (!page) {
		let notFound = false;
		let errorPage = await getPage('404');
		if (errorPage) notFound = true;
		else errorPage = await getPage('500');

		const code = notFound ? 404 : 500;
		const message = notFound ? 'Not found' : 'Server Error';

		throw error(code, {
			message,
			code,
			page: errorPage ?? null
		});
	}

	// This HAS to be an object. We cannot just return page
	return { page };
}

export const prerender = true;
