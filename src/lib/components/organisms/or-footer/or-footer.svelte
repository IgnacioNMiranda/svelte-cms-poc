<script lang="ts">
	import type { OrFooterProps } from './or-footer.types';

	export let props: OrFooterProps;
</script>

<footer class="bg-[#223F59] shadow">
	<div
		class="w-full mx-auto max-w-screen-xl py-4 px-4 md:px-6 lg:px-8 md:flex md:items-center md:justify-between"
	>
		<span class="text-sm sm:text-center text-white">© {props.copyright} </span>
		{#if props.links && props.links.length}
			<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
				{#each props.links as link}
					<li>
						<a
							href={link.url}
							class="hover:underline text-white hover:text-[#FDB05A] me-4 md:me-6 transition-colors"
							>{link.label}</a
						>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</footer>
