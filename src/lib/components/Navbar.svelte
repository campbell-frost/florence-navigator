<script lang="ts">
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';
	import { navItems } from '@/data/routes';
	let navOpen = $state(false);

	const toggleNav = () => {
		navOpen = !navOpen;
	};
</script>

<nav class="border-b bg-background">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-start">
      <div class="flex w-full items-center justify-between">
        <div>
          <a href="/" class="flex flex-shrink-0 items-center">
            <img class="h-8 w-8" src="compasslogoflonav.png" alt="Logo" />
            <h1 class="px-4 font-ptserrif text-3xl">Florence Navigator</h1>
          </a>
        </div>

        <div class="hidden lg:block">
          <div class="ml-10 flex items-baseline space-x-4">
            {#each navItems as item}
              <div class="relative group">
                <a 
                  href={item.href} 
                  class="px-4 py-2 hover:text-accent-foreground transition-colors"
                >
                  {item.label}
                </a>
                {#if item.children}
                  <div class="absolute left-0 top-11 w-56 invisible group-hover:visible 
                            opacity-0 group-hover:opacity-100 transition-all duration-200 
                            bg-background shadow-lg rounded-md border border-border
                            z-50">
                    {#each item.children as child}
                      <a 
                        href={child.href}
                        class="block px-4 py-2 text-sm text-foreground hover:bg-accent 
                               hover:text-accent-foreground transition-colors"
                      >
                        {child.label}
                      </a>
                    {/each}
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </div>
      <div class="lg:hidden">
				<Sheet bind:open={navOpen}>
					<SheetTrigger asChild>
						<button onclick={toggleNav} class="rounded-lg p-2 hover:bg-slate-100">
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
