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

	return { page };
}
