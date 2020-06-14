<script>
	import NavLinks from './NavLinks.svelte'
	import Hamburger from './Hamburger.svelte'
	import Sidebar from './Sidebar.svelte'
	export let segment;
	export let bgImage;
	export let logo;
	export let links;
	export let open;	
	export let sidebar = false;

	const handleMenuToggle = () => (open = !open);
</script>

<style>
	 .site-header {
	 background: _palette(secondary);
	 color: #fff;
	 position: relative;
	}
	.site-header-bg {
		background-position: center 20%;
		background-repeat: no-repeat;
		background-size: cover;
		bottom: 0;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}
	.site-header-bg:before {
		background: -moz-linear-gradient(top, rgba(17, 17, 17, 0) 0, rgba(17, 17, 17, .01) 1%, rgba(17, 17, 17, .7) 70%, rgba(17, 17, 17, .9) 100%);
		background: -webkit-linear-gradient(top, rgba(17, 17, 17, 0) 0, rgba(17, 17, 17, .01) 1%, rgba(17, 17, 17, .7) 70%, rgba(17, 17, 17, .9) 100%);
		background: linear-gradient(to bottom, rgba(17, 17, 17, 0) 0, rgba(17, 17, 17, .01) 1%, rgba(17, 17, 17, .7) 70%, rgba(17, 17, 17, .9) 100%);
		bottom: 0;
		content: "";
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}
	.site-header-inside {
		box-sizing: border-box;
		padding: 3.33333em 4vw;
		position: relative;
	}
	
</style>

<header class="site-header md:w-1/3 md:max-w-md md:inset-y-0 md:left-0 h-1/5 md:h-screen md:sticky">
	<div class="site-header-bg" style="background-image: url({bgImage})"></div>
	<div class="h-full">
		<div class="site-header-inside h-full object-bottom">
			<div class="flex md:flex-col h-full justify-between items-center md:justify-end items-stretch  w-screen md:w-auto">
				<div class="w-full md:pb-4">
					<p class="py-5 ">
						<a aria-current="page" href="/">
							<img class="object-cover object-center h-16 md:h-auto" src = {logo} alt="logo">
						</a>
					</p>
				</div>
				<div class="hidden md:block">
					<nav aria-label="Main Navigation">
						<div class="site-nav-wrap">
							<div class="site-nav-inside">
							<NavLinks {links} {segment} />      
							</div>
						</div>
					</nav>
				</div>
				<div class="pr-4 h-full">
					<Hamburger bind:open={sidebar}/>
				</div>
			</div>
		</div>
	</div>
</header>


