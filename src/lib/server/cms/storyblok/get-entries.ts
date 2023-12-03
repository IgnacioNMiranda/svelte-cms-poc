import { storyblokClient } from './client';

export const getPageStoryBySlug = async (slug: string) => {
	const storyblokSlug = slug === '/' ? 'home' : slug;

	try {
		const story = await storyblokClient.getStory(storyblokSlug, {});
		return story.data;
		// return cleanStoryblokStory(story) as ContentfulPage;
	} catch (error) {
		return null;
	}
};
