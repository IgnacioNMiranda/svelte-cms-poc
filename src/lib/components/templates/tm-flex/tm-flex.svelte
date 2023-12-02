<script lang="ts">
	import type { TmFlexProps } from './tm-flex.types';
	import OrHeroBanner from '$lib/components/organisms/or-hero-banner/or-hero-banner.svelte';

	export let props: TmFlexProps;
</script>

<div class="text-center py-10 px-4 sm:px-6 lg:px-8">
	{#each props.blocks ?? [] as block}
		<OrHeroBanner props={block} />
	{/each}
</div>
