<script lang="ts">
	import { about } from '@/data/about';
</script>

<div class="mx-auto max-w-4xl">
	<div class="card space-y-8">
		<header class="text-center">
			<h1 class="mb-6 font-vesperBold text-4xl text-gray-900 dark:text-gray-100">
				About Florence Navigator
			</h1>

			<p class="prose prose-lg mx-auto text-gray-700 dark:text-gray-300">
				The Florence Navigator is a collaborative endeavor between students from the Computer
				Science, History, English, and Visual Arts program at Francis Marion University. Professor
				Keith Best narrated the scripts for each site, and the
				<a
					href="https://bluedogs.com/"
					class="text-emerald-600 transition-colors hover:underline dark:text-emerald-500"
				>
					Blue Dogs
				</a> provided intro music for the audio recordings.
			</p>
		</header>

		<div class="space-y-12">
			{#each about as section}
				<section class="space-y-6">
					<h2 class="text-center font-vesperMedium text-3xl text-gray-800 dark:text-gray-300">
						{section.title}
					</h2>

					<ul class="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
						{#each section.contributors as contributor, i}
							<div class={`text-center ${i % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
								<li class="flex flex-col">
									{#if contributor.url}
										<a
											href={contributor.url}
											class="text-emerald-600 transition-colors hover:underline dark:text-emerald-500"
										>
											{contributor.person}
										</a>
									{:else}
										<span class="font-roboto text-lg text-gray-900 dark:text-gray-100">
											{contributor.person}
										</span>
										{#if contributor.title}
											<span class="text-sm text-gray-600 dark:text-gray-400">
												{contributor.title}
											</span>
										{/if}
									{/if}
								</li>
							</div>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	</div>
</div>
