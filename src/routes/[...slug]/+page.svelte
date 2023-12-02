<script>
	import PgPage from '$lib/components/pages/pg-page/pg-page.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<PgPage props={data.page} />
