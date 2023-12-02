import {
	CMS,
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_DELIVERY_TOKEN,
	CONTENTFUL_ENVIRONMENT
} from '$env/static/private';

export const environment = {
	cms: CMS,
	contentful: {
		spaceId: CONTENTFUL_SPACE_ID,
		deliveryToken: CONTENTFUL_DELIVERY_TOKEN,
		env: CONTENTFUL_ENVIRONMENT
	}
};
