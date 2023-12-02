import type { PgPageProps } from '../../../components/pages/pg-page/pg-page.types';
import type { ContentfulPage } from './content-types/pages/page';

export const contentfulPageToReactProps = (page: ContentfulPage): PgPageProps => {
	return {
		title: page.title,
		slug: page.slug,
		header: {}
	};
};
