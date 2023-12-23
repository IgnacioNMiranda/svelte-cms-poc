import type { ComponentProps } from '../../component-props';
import type { OrHeroBannerProps } from '../../organisms/or-hero-banner/or-hero-banner.types';

export interface TmFlexProps extends ComponentProps<'templateFlex'> {
	blocks: OrHeroBannerProps[];
}
