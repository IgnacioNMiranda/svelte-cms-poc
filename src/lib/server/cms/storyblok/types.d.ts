/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Update running 'pnpm gen-sb-types' whenever new storybloks are created
 */

export interface FooterStoryblok {
	copyright: string;
	links: LinkStoryblok[];
	_uid: string;
	component: 'footer';
	[k: string]: any;
}

export type MultilinkStoryblok =
	| {
			id?: string;
			cached_url?: string;
			anchor?: string;
			linktype?: 'story';
			story?: {
				name: string;
				created_at?: string;
				published_at?: string;
				id: number;
				uuid: string;
				content?: {
					[k: string]: any;
				};
				slug: string;
				full_slug: string;
				sort_by_date?: null | string;
				position?: number;
				tag_list?: string[];
				is_startpage?: boolean;
				parent_id?: null | number;
				meta_data?: null | {
					[k: string]: any;
				};
				group_id?: string;
				first_published_at?: string;
				release_id?: null | number;
				lang?: string;
				path?: null | string;
				alternates?: any[];
				default_full_slug?: null | string;
				translated_slugs?: null | any[];
				[k: string]: any;
			};
			[k: string]: any;
	  }
	| {
			url?: string;
			cached_url?: string;
			anchor?: string;
			linktype?: 'asset' | 'url';
			[k: string]: any;
	  }
	| {
			email?: string;
			linktype?: 'email';
			[k: string]: any;
	  };

export interface HeaderStoryblok {
	logo_title: string;
	logo_url: Exclude<MultilinkStoryblok, { linktype?: 'email' } | { linktype?: 'asset' }>;
	links: LinkStoryblok[];
	_uid: string;
	component: 'header';
	[k: string]: any;
}

export interface RichtextStoryblok {
	type: string;
	content?: RichtextStoryblok[];
	marks?: RichtextStoryblok[];
	attrs?: any;
	text?: string;
	[k: string]: any;
}

export interface AssetStoryblok {
	alt?: string;
	copyright?: string;
	id: number;
	filename: string;
	name: string;
	title?: string;
	focus?: string;
	[k: string]: any;
}

export interface HeroBannerStoryblok {
	title: string;
	blurb?: RichtextStoryblok;
	asset: AssetStoryblok;
	assetPosition?: '' | 'left' | 'right';
	_uid: string;
	component: 'heroBanner';
	[k: string]: any;
}

export interface LinkStoryblok {
	label: string;
	url: string;
	_uid: string;
	component: 'link';
	[k: string]: any;
}

export interface PageStoryblok {
	Title: string;
	header: HeaderStoryblok[];
	template: TemplateFlexStoryblok[];
	footer: FooterStoryblok[];
	_uid: string;
	component: 'page';
	uuid?: string;
	[k: string]: any;
}

export interface TemplateFlexStoryblok {
	blocks: HeroBannerStoryblok[];
	_uid: string;
	component: 'templateFlex';
	[k: string]: any;
}
