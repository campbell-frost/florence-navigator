<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';

	let sun = $state(false);
  
	const toggleState = () => {
		sun = !sun;
		toggleMode();
	};
</script>

<button onclick={toggleState} class="rounded-lg p-2 transition-colors duration-200 hover:text-main-green">
	{#if sun}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
