<script lang="ts">
	import type { LocationModel } from '$lib/types';
	import { MapPin } from 'lucide-svelte';
	let { contents: content, image, title, footer, location }: LocationModel = $props();
</script>

<article class="card">
	<div class=" dark:">
		<header class="mb-8">
			<h1 class="title mb-4">{title}</h1>
			<img
				src={image}
				alt={title}
				class="mb-4 h-full w-full rounded-lg object-cover transition-all duration-300"
			/>
			<div class="grid grid-cols-2 dark:bg-background">
				<div class="flex items-start gap-x-3">
					<MapPin class="text-gray-700 dark:text-gray-300" />
					<span class="text-gray-700 dark:text-gray-300">{location}</span>
				</div>
				<p class="text-end italic text-gray-700 dark:text-gray-300">{footer}</p>
			</div>
		</header>
		{#each content as items}
			<p class="prose mb-6">{items}</p>
		{/each}
	</div>
</article>