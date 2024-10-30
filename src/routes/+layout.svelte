<script lang="ts">
	import Navbar from '@/components/Navbar.svelte';
import '../app.css';
	import Footer from '@/components/Footer.svelte';
	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />