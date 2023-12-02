<script lang="ts">
	import '$lib/styles/tailwind.css';

	import TmFlex from '$lib/components/templates/tm-flex/tm-flex.svelte';
	import type { PgPageProps } from '$lib/components/page.types';

	/** @type {import('./$types').PageData} */
	export let data: { page: PgPageProps };
</script>

{#if data.page.template.type === 'flex'}
	<TmFlex props={data.page.template} />
{:else if data.page.template.type === 'sidebar'}
	Sidebar
{:else}
	<TmFlex props={data.page.template} />
{/if}
