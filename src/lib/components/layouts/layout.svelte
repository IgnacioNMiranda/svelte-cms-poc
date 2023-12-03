<script lang="ts">
	import OrHeader from '$lib/components/organisms/or-header/or-header.svelte';
	import OrFooter from '$lib/components/organisms/or-footer/or-footer.svelte';
	import type { PgPageProps } from '$lib/components/page.types';

	/** @type {import('./$types').PageData} */
	export let props: PgPageProps;
</script>

<svelte:head>
	<title>{props.title}</title>
</svelte:head>

<div class="flex flex-col min-h-screen bg-gray-900">
	<OrHeader props={props.header} />
	<main class="flex-1">
		<slot />
	</main>
	<OrFooter props={props.footer} />
</div>
