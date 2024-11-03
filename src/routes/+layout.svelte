<script lang="ts">
	import Navbar from '@/components/Navbar.svelte';
	import '../app.css';
	import Footer from '@/components/Footer.svelte';
	let { children } = $props();
</script>

<Navbar />
<div class="mx-auto mt-4 max-w-6xl px-4 sm:px-6 md:mt-24 lg:px-8 grid grid-rows-1 ">
	{@render children()}
</div>

<Footer />
