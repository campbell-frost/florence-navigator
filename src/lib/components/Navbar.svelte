<script lang="ts">
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';
	let navOpen = $state(false);

	const toggleNav = () => {
		navOpen = !navOpen;
	};

	type NavItem = {
		href: string;
		label: string;
		children?: {
			href: string;
			label: string;
		}[];
	};

	const navItems: NavItem[] = [
		{
			href: '/Downtown',
			label: 'Downtown Florence',
			children: [
				{
					href: 'house/ebony',
					label: 'Ebony Guest House'
				},
				{
					href: 'house/ebony',
					label: 'Ebony Guest House'
				},
				{
					href: 'house/ebony',
					label: 'Ebony Guest House'
				},
				{
					href: 'house/ebony',
					label: 'Ebony Guest House'
				},
				{
					href: 'house/ebony',
					label: 'Ebony Guest House'
				},
				{
					href: 'house/ebony',
					label: 'Ebony Guest House'
				}
			]
		},
		{ href: '/services', label: 'Around Florence' },
		{ href: '/contact', label: 'About' },
		{ href: '/contact', label: 'Privacy Policy' }
	];
</script>

<nav class="border-b bg-background">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-start">
			<div class="flex w-full items-center justify-between">
				<div>
					<a href="/" class="flex flex-shrink-0 items-center">
						<img class="h-8 w-8" src="compasslogoflonav.png" alt="Logo" />
						<h1 class="font-ptserrif px-4 text-3xl">Florence Navigator</h1>
					</a>
				</div>
				<div class="hidden lg:block">
					<div class="hover: ml-10 flex items-baseline space-x-4">
						{#each navItems as item}
							<a href={item.href} class="">
								{item.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
			<div class="lg:hidden">
				<Sheet bind:open={navOpen}>
					<SheetTrigger asChild>
						<button  onclick={toggleNav} class="hover:bg-slate-100 p-2 rounded-lg" >
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
