import type { ISbStoryData } from '@storyblok/js';
import type { PgPageProps } from '../../../components/page.types';
import { storyblokClient } from './client';
import { storyblokPageStoryToProps } from './page-story-to-props';
import type { PageStoryblok } from './types';

export const getPageStoryBySlug = async (slug: string): Promise<PgPageProps | null> => {
	let storyblokSlug = slug === '/' ? 'home' : slug;
	if (storyblokSlug === '/') storyblokSlug = 'home';
	else if (storyblokSlug === '404') storyblokSlug = 'notFound';
	else if (storyblokSlug === '500') storyblokSlug = 'serverError';

	try {
		const story = await storyblokClient.getStory(storyblokSlug, {
			resolve_relations: 'page.footer,page.header'
		});
		return storyblokPageStoryToProps(story.data.story as ISbStoryData<PageStoryblok>);
	} catch (error) {
		return null;
	}
};

export const getAllSlugs = async () => {
	try {
		const pageStories = await storyblokClient.getStories({
			content_type: 'page'
		});
		return pageStories.data.stories.map((story) => {
			let slug = story.full_slug;
			if (slug === '/') slug = 'index';
			else if (slug === 'notFound') slug = '404';
			else if (slug === 'serverError') slug = '500';

			return { slug: story.full_slug };
		});
	} catch (error) {
		return [];
	}
};
