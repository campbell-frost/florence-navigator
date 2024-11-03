<script lang="ts">
	import Navbar from '@/components/Navbar.svelte';
	import '../app.css';
	import Footer from '@/components/Footer.svelte';
	let { children } = $props();
</script>

<Navbar />
<div class="bg-slate-50">
	<div class="mx-auto pt-4 grid max-w-6xl grid-rows-1 px-4 sm:px-6 lg:px-8 ">
		{@render children()}
	</div>
</div>

<Footer />
