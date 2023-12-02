import { getPageBySlug } from './contentful/get-entries';
import { contentfulPageToProps } from './contentful/page-to-props';

export const getPage = async (slug: string) => {
	const contentfulPage = await getPageBySlug(slug);
	if (contentfulPage) return contentfulPageToProps(contentfulPage);
};
