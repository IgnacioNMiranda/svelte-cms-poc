import { getPageBySlug } from './contentful/get-entries';
import { contentfulPageToProps } from './contentful/page-to-props';
// import { getPageStoryBySlug } from './storyblok/get-entries';

export const getPage = async (slug: string) => {
	// const story = await getPageStoryBySlug(slug);

	const contentfulPage = await getPageBySlug(slug);
	if (contentfulPage) return contentfulPageToProps(contentfulPage);
};
