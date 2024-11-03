<script lang="ts">
	import type { LocationModel } from '$lib/types';
	let { content, image, title }: LocationModel = $props();
</script>

<div class="py-8">
	<div class="flex flex-col items-center gap-8 lg:flex-row">
		<div class="flex-1 space-y-4">
			<h1 class="px-4 font-ptserrif text-5xl">{title}</h1>
		</div>
		<div class="w-full lg:w-1/2 flex justify-center flex-col text-center">
			<div class="overflow-hidden rounded-2xl shadow-lg">
				<img src={image} alt={title} class="h-72 w-full object-cover" />
			</div>
			<p class="prose text-gray-600 mt-3">
				The Ebony Guest House historical marker. Courtesy of the Francis Marion University Office of
				Communications.
			</p>
		</div>
	</div>
	<div class="prose mt-20 max-w-none leading-relaxed text-gray-600">
		{content}
	</div>
</div>
