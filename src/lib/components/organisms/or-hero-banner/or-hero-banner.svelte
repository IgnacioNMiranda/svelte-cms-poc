<script lang="ts">
	import type { OrHeroBannerProps } from './or-hero-banner.types';

	export let props: OrHeroBannerProps;
</script>

<section class="bg-white dark:bg-gray-900 border-b-[0.5px] px-8">
	<div
		class="grid max-w-screen-xl pb-8 pt-4 mx-auto gap-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
	>
		<div
			class={`mr-auto place-self-center lg:col-span-6  ${
				props.assetPosition === 'left' ? 'order-last lg:col-start-7' : 'order-first'
			}`}
		>
			<h1
				class="text-left max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
			>
				{props.title}
			</h1>
			<div
				class="text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
			>
				<slot name="blurb" />
			</div>
		</div>
		<div
			class={`mt-0 lg:col-span-5 ${props.assetPosition === 'left' ? '' : 'lg:col-start-8'} lg:flex`}
		>
			<img src={props.asset.src} alt={props.asset.alt || 'Hero Banner Image'} />
		</div>
	</div>
</section>
