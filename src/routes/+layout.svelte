<script lang="ts">
	import Navbar from '@/components/Navbar.svelte';
import '../app.css';
	import Footer from '@/components/Footer.svelte';
	let { children } = $props();
</script>

<Navbar />
{@render children()}

<div class="flex flex-col h-screen">
	<div class="flex-grow">
		<Footer />
	</div>
</div>