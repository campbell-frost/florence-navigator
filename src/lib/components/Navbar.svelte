<script lang="ts">
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';
	import { navItems } from '@/data/routes';
	import ThemeToggle from './ThemeToggle.svelte';
	let navOpen = $state(false);
</script>

<nav class="border-b bg-background">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-start">
			<div class="flex w-full items-center justify-between">
				<a href="/" class="flex items-center justify-center">
					<img class="h-8 w-8" src="/compasslogoflonav.png" alt="Logo" />
					<h1 class="px-4 font-vesperMedium text-3xl leading-none">Florence Navigator</h1>
				</a>
				<div class="hidden lg:block">
					<div class="ml-10 flex items-center space-x-4">
						{#each navItems as item}
							<div class="group relative">
								<a
									href={item.href}
									class="py-2 pl-8 font-lexendregular text-lg font-medium transition-colors duration-200 hover:text-main-green"
								>
									{item.label}
								</a>
								{#if item.children}
									<div
										class="invisible absolute left-0 top-11 z-50 w-56
                            rounded-md border border-border bg-background
                            opacity-0 shadow-lg transition-all duration-200 group-hover:visible
                            group-hover:opacity-100"
									>
										{#each item.children as child}
											<a
												href={child.href}
												class="block px-4 py-2 text-sm text-foreground transition-colors
                               hover:bg-accent hover:text-accent-foreground"
											>
												{child.label}
											</a>
										{/each}
									</div>
								{/if}
							</div>
						{/each}
						<div>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</div>
			<div class="lg:hidden">
				<Sheet bind:open={navOpen}>
					<SheetTrigger asChild>
						<button
							onclick={() => (navOpen = !navOpen)}
							class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
						>
							<Menu class="h-5 w-5" />
							<span class="sr-only">Open menu</span>
						</button>
					</SheetTrigger>
					<SheetContent side="right" class="w-[300px] sm:w-[400px]">
						<nav class="mt-4 flex flex-col space-y-4">
							{#each navItems as item}
								<a
									href={item.href}
									class="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
								>
									{item.label}
								</a>
							{/each}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	</div>
</nav>
