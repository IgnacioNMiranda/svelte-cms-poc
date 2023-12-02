<script lang="ts">
	import type { TmFlexProps } from './tm-flex.types';
	import OrHeroBanner from '$lib/components/organisms/or-hero-banner/or-hero-banner.svelte';

	export let props: TmFlexProps;
</script>

<div class="text-center py-10">
	{#each props.blocks ?? [] as block}
		<OrHeroBanner props={block}>
			<svelte:fragment slot="blurb">
				{@html block.blurb}
			</svelte:fragment>
		</OrHeroBanner>
	{/each}
</div>
