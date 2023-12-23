import { environment } from '../../config/environment';
import { getAllSlugs as contentfulGetAllSlugs } from './contentful/get-entries';
import { getAllSlugs as storyblokGetAllSlugs } from './storyblok/get-entries';

export const getAllSlugs = () => {
	if (environment.cms === 'storyblok') return storyblokGetAllSlugs();

	// Contentful is the default CMS to be used
	return contentfulGetAllSlugs();
};
