import { environment } from '$lib/config/environment';
import { storyblokInit, apiPlugin } from '@storyblok/js';
import type { StoryblokClient } from '@storyblok/js';

// 2. Initialize the client with the preview token
// from your space dashboard at https://app.storyblok.com
// https://github.com/storyblok/storyblok-js?tab=readme-ov-file#initialization
const sb = storyblokInit({
	accessToken: environment.storyblok.deliveryToken,
	use: [apiPlugin],
	apiOptions: {
		/**
		 * In my experience, this is always needed, otherwise Storyblok will use
		 * 'https://api.storyblok.com/v2 by default, which always throws
		 * 'This record could not be found'.
		 */
		endpoint: 'https://api-us.storyblok.com/v2'
	}
});
export const storyblokClient = sb.storyblokApi as StoryblokClient;
