<script lang="ts">
	import type { LocationModel } from '$lib/types';
	let { contents: content, image, title, footer }: LocationModel = $props();
</script>

<div class="card">
	<div class="flex flex-col items-center ">
		<div class="flex-1 text-center lg:text-left">
			<h1 class="title pb-10">
				{title}
			</h1>
		</div>
		<div class="flex w-full flex-col justify-center">
			<img src={image} alt={title} class="h-full w-full object-cover transition-all duration-300 rounded-3xl mb-4" />
			<p class="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
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
