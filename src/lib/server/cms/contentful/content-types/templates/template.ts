import type { ContentType } from '../content-type';
import type { ContentfulHeroBanner } from '../organisms/hero-banner';

type ContentfulFlexTemplate = ContentType & {
	blocks: ContentfulHeroBanner[];
};

export type ContentfulTemplate = ContentfulFlexTemplate;
