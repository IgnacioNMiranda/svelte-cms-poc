<script lang="ts">
	import Template from '$lib/components/templates/template.svelte';
	import type { PgPageProps } from '$lib/components/page.types';

	/** @type {import('./$types').PageData} */
	export let data: { page: PgPageProps };
</script>

<Template template={data.page.template} />
