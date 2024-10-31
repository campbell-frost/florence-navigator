<script lang="ts">
	import type { PageData } from './$types';
	import Location from '$lib/components/Location.svelte';

	let { data } = $props<{ data: PageData }>();
</script>

<div class="mx-auto mt-4 max-w-6xl px-4 sm:px-6 md:mt-24 lg:px-8">
	<Location {...data.location} />
</div>
