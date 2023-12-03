<script lang="ts">
	import '$lib/styles/tailwind.css';

	import { page } from '$app/stores';
	import Layout from '$lib/components/layouts/layout.svelte';
	import Template from '$lib/components/templates/template.svelte';
</script>

{#if $page.error?.code && [404, 500].includes($page.error?.code) && $page.error.page}
	<Layout props={$page.error.page}><Template template={$page.error.page.template} /></Layout>
{:else}
	<h1 class="text-4xl">{$page.error?.message}</h1>
	<a href="/" class="hover:underline">Go back to Home</a>
{/if}
