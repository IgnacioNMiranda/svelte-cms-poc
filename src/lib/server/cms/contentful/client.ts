import contentful from 'contentful';
import { environment } from '$lib/config/environment';

export const getClient = () =>
	contentful.createClient({
		space: environment.contentful.spaceId,
		accessToken: environment.contentful.deliveryToken,
		host: 'cdn.contentful.com',
		environment: environment.contentful.env
	}).withoutUnresolvableLinks;
