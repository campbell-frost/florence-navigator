<script lang="ts">
	import type { LocationModel } from '$lib/types';
	let { contents: content, image, title, footer, location }: LocationModel = $props();
</script>

<article class="card">
	<header class="mb-8">
		<h1 class="title mb-4">{title}</h1>
		<img
			src={image}
			alt={title}
			class="mb-4 h-full w-full rounded-lg object-cover transition-all duration-300"
		/>
		<div class="flex items-center justify-between bg-gray-50 dark:bg-background p-3 dark:p-0  rounded-lg">
			<div class="flex gap-x-3">
				<svg class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
						clip-rule="evenodd"
					/>
				</svg>
				<span class="text-gray-600">{location}</span>
			</div>
			<p class="text-sm italic text-gray-500">{footer}</p>
		</div>
	</header>
	<div class="prose prose-lg max-w-none">
		{#each content as items}
			<p class="mb-6 leading-relaxed text-gray-700 dark:text-gray-400">{items}</p>
		{/each}
	</div>
</article>
