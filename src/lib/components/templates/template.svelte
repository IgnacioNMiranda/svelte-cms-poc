<script lang="ts">
	import TmFlex from '$lib/components/templates/tm-flex/tm-flex.svelte';
	import type { PgPageProps } from '$lib/components/page.types';

	/** @type {import('./$types').PageData} */
	export let template: PgPageProps['template'];
</script>

{#if template.type === 'flex'}
	<TmFlex props={template} />
{:else if template.type === 'sidebar'}
	Sidebar
{:else}
	<TmFlex props={template} />
{/if}
