<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '@/components/Navbar.svelte';
	import Footer from '@/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
  <Navbar />
  <div class="layout">
    {@render children()} 
  </div>
  <Footer />
</div>