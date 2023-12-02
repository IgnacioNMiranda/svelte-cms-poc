import { createClient } from 'contentful';
import { environment } from '$lib/config/environment';

export const getClient = () =>
	createClient({
		space: environment.contentful.spaceId,
		accessToken: environment.contentful.deliveryToken,
		host: 'cdn.contentful.com',
		environment: environment.contentful.env
	}).withoutUnresolvableLinks;
