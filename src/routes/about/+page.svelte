<script lang="ts">
	import { about } from '@/data/about';
</script>

<div class="card"> 
	<h1 class="title">About Florence Navigator</h1>
	<p class="prose mt-4">
		The Florence Navigator is a collaborative endeavor between students from the Computer Science,
		History, English, and Visual Arts program at Francis Marion University. Professor Keith Best
		narrated the scripts for each site, and the <a
			href="https://bluedogs.com/"
			class="text-main-green underline">Blue Dogs</a
		> provided intro music for the audio recordings.
	</p>
	<div class="mt-4">
		{#each about as item}
			<h1 class="text-3xl mb-4">{item.title}</h1>
			<ul>
				<li class="mb-10">
					{#each item.contributors as contributer}
						<div class="flex ml-7">
							{#if contributer.url}
								<a class=" text-main-green underline" href={contributer.url}>{contributer.person}</a>
							{:else}
								{contributer.person}, {contributer.title}
							{/if}
						</div>
					{/each}
				</li>
			</ul>
		{/each}
	</div>
</div>
