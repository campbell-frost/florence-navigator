<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '@/components/Navbar.svelte';
	import Footer from '@/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<ModeWatcher />
<Navbar />
<div class="mx-auto grid max-w-6xl grid-rows-1 p-4 sm:px-6 lg:px-8">
	{@render children()}
</div>
<Footer />
