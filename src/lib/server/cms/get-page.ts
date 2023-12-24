import { environment } from '../../config/environment';
import { getPageBySlug } from './contentful/get-entries';
import { getPageStoryBySlug } from './storyblok/get-entries';

export const getPage = async (slug: string) => {
	if (environment.cms === 'storyblok') return getPageStoryBySlug(slug);

	// Contentful is the default CMS to be used
	return getPageBySlug(slug);
};
