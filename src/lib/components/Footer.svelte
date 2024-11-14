<script lang="ts">
	const year = new Date().getFullYear().toString();
</script>

<footer class="w-full border-t bg-white dark:bg-background">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid min-h-16 grid-cols-3 py-4">
			<h1 class=" text-gray-800 dark:text-gray-200">
				© {year} Florence Navigator
			</h1>
			<h1 class=" transition-colors text-center text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white">
				<a href="/about">About</a>
			</h1>
			<h1 class=" transition-colors text-end text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white">
				<a href="/privacy-policy"> Privacy </a>
			</h1>	
		</div>
	</div>
</footer>
