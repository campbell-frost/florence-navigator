<script lang="ts">
	import type { PageData } from './$types';
	import Location from '$lib/components/Location.svelte';

	let { data } = $props<{ data: PageData }>();
</script>

<Location {...data.location} />
