<script lang="ts">
	import type { LocationModel } from '$lib/types';
	let { content, image, title }: LocationModel = $props();
</script>

<div class="container mx-auto px-4 py-8">
	<div class="flex flex-col items-center gap-8 lg:flex-row">
		<div class="flex-1 space-y-4">
			<h1 class="px-4 font-ptserrif text-3xl">Florence Navigator</h1>
		</div>

		<div class="w-full lg:w-1/2">
			<div class="overflow-hidden rounded-2xl shadow-lg">
				<img
					src={image}
					alt={title}
					class="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
		</div>
	</div>
	<div class="prose max-w-none leading-relaxed text-gray-600 mt-20">
		{content}
	</div>
</div>
