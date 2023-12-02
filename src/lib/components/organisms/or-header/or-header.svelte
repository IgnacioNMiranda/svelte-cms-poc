<script lang="ts">
	import type { OrHeaderProps } from './or-header.types';

	export let props: OrHeaderProps;
</script>

<header>
	<nav class="border-gray-200 px-4 lg:px-6 py-2.5 bg-[#ECA00A]">
		<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
			<a href="/" class="flex items-center">
				<img
					src="https://cdn2.steamgriddb.com/logo_thumb/dc8a19a19e402c8e83c7684c54d32dc1.png"
					class="mr-3 h-6 sm:h-9"
					alt="My Awesome Site Logo"
				/>
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>Awesome Site</span
				>
			</a>
			<div
				class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
				id="mobile-menu-2"
			>
				<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
					<li>
						<a
							href="/"
							class="block py-2 pr-4 pl-3 text-white hover:underline transition-colors hover:text-[#223F59] lg:p-0"
							aria-current="page">Home</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
