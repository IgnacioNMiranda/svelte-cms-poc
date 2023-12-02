import { getPage } from '$lib/server/cms/get-page';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */ export async function load({ params }) {
	const slug = params.slug || '/';

	const page = await getPage(slug);

	if (!page) {
		throw error(404, {
			message: 'Not found'
		});
	}

	// This HAS to be an object. We cannot just return page
	return { page };
}
