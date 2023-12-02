import { environment } from '../../config/environment';
import { getPageBySlug } from './contentful/get-entries';
import { contentfulPageToReactProps } from './contentful/page-to-react-props';

export const getPage = async (slug: string) => {
	if (environment.cms === 'contentful') {
		const contentfulPage = await getPageBySlug(slug);
		if (contentfulPage) return contentfulPageToReactProps(contentfulPage);
	}
	return null;
};
