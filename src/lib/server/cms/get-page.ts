import { environment } from '../../config/environment';
import { getPageBySlug } from './contentful/get-entries';
import { contentfulPageToProps } from './contentful/page-to-props';
import { getPageStoryBySlug } from './storyblok/get-entries';

export const getPage = async (slug: string) => {
	if (environment.cms === 'storyblok') return getPageStoryBySlug(slug);

	// Contentful is the default CMS to be used
	const contentfulPage = await getPageBySlug(slug);
	if (contentfulPage) return contentfulPageToProps(contentfulPage);
};
