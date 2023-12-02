<script lang="ts">
	import '$lib/styles/tailwind.css';

	import OrHeader from '$lib/components/organisms/or-header/or-header.svelte';
	import OrFooter from '$lib/components/organisms/or-footer/or-footer.svelte';
	import type { PgPageProps } from '$lib/components/page.types';

	/** @type {import('./$types').PageData} */
	export let data: { page: PgPageProps };
</script>

<div class="flex flex-col min-h-screen">
	<OrHeader props={data.page.header} />
	<main class="flex-1">
		<slot />
	</main>
	<OrFooter props={data.page.footer} />
</div>
