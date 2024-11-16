<script lang="ts">
	import Location from '$lib/components/Location.svelte';
	import type { PageData } from './$types';
	let { data } = $props<{ data: PageData }>();
</script>

<Location {...data.location} />
