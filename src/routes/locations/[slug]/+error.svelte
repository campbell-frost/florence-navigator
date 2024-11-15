<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex min-h-[50vh] flex-col items-center justify-center">
	<div
		class="flex flex-col items-center justify-center gap-y-6 rounded-lg bg-card p-12 shadow-lg dark:shadow-none border"
	>
		<h1 class="flex items-center gap-x-4">
			<span class="text-6xl font-bold">404</span>
			<div class="h-12 w-0.5 bg-gray-300"></div>
			<span class="text-3xl text-gray-700 dark:text-gray-300">Location Not Found</span>
		</h1>
		<p class="text-lg text-gray-600 dark:text-gray-400">
			Sorry, we couldn't find a location called "<span class="font-semibold"
				>{$page.params.slug}</span
			>"
		</p>
	</div>
</div>
