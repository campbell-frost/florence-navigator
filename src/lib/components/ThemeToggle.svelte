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

<button onclick={toggleState} class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
	{#if sun}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
