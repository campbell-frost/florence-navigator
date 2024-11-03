<script lang="ts">
	import type { LocationModel } from '$lib/types';
	let { contents: content, image, title, footer }: LocationModel = $props();
</script>

<div class="px-6 py-12">
	<div class="flex flex-col items-center gap-8 lg:gap-12">
		<div class="flex-1 space-y-4 text-center lg:text-left">
			<h1 class="px-4 text-5xl font-bold tracking-tight text-gray-800 dark:text-gray-200 font-vesperMedium">
				{title}
			</h1>
		</div>
		<div class="flex w-full flex-col justify-center">
			<img src={image} alt={title} class="h-full w-full object-cover transition-all duration-300 rounded-3xl mb-4" />

			<p class="text-lg leading-relaxed text-gray-500">
				{footer}
			</p>
		</div>
	</div>
	<div class="prose mt-12 max-w-none leading-relaxed">
		{#each content as item}
			<div class="pt-4 text-base text-gray-600 dark:text-gray-300 lg:text-lg">
				{item}
			</div>
		{/each}
	</div>
</div>
