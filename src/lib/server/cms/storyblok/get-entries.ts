import type { ISbStoryData } from '@storyblok/js';
import type { PgPageProps } from '../../../components/page.types';
import { storyblokClient } from './client';
import { storyblokPageStoryToProps } from './page-story-to-props';
import type { PageStoryblok } from './types';

export const getPageStoryBySlug = async (slug: string): Promise<PgPageProps | null> => {
	const storyblokSlug = slug === '/' ? 'home' : slug;

	try {
		const story = await storyblokClient.getStory(storyblokSlug, {});
		return storyblokPageStoryToProps(story.data.story as ISbStoryData<PageStoryblok>);
	} catch (error) {
		return null;
	}
};
