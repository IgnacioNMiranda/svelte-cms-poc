import StoryblokClient from 'storyblok-js-client';
import { environment } from '$lib/config/environment';

// 2. Initialize the client with the preview token
// from your space dashboard at https://app.storyblok.com
export const storyblokClient = new StoryblokClient({
	accessToken: environment.storyblok.deliveryToken,
	/**
	 * In my experience, this is always needed, otherwise Storyblok will use
	 * 'https://api.storyblok.com/v2 by default, which always throws
	 * 'This record could not be found'.
	 */
	endpoint: 'https://api-us.storyblok.com/v2'
});
