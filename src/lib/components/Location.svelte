<script lang="ts">
	import type { LocationModel } from '$lib/types';
	let { content, footer, image, title }: LocationModel = $props();
</script>

<div class="flex gap-x-3">
	<h1>{title}</h1>
	{content}
	<img src={image} alt={title} />
	{footer}
</div>
