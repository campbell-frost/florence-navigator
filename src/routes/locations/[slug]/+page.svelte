<script lang="ts">
	import Location from '$lib/components/Location.svelte';
	import type { LocationModel } from '$lib/types';
	let location: LocationModel = $props();
</script>

<Location {...location} />
