<script lang="ts">
	import '$lib/styles/tailwind.css';

	import type { PgPageProps } from '$lib/components/page.types';
	import Layout from '$lib/components/layouts/layout.svelte';

	/** @type {import('./$types').PageData} */
	export let data: { page: PgPageProps };
</script>

<Layout props={data.page}><slot /></Layout>
