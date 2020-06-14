<script context="module">
    import client from "../sanityClient";
    
    export async function preload({params}) {
        const filter = '*[_type == "siteSettings"][0]'
        const projection = `{
			...,
			'header':{
					
					'bgImage':header.bg_img.asset->url,
					'logo': header.logo_img.asset->url
				},
			...
			}`;
					
		const query = filter + projection;
		const siteInfo = await client
			.fetch(query)
			.catch(err => this.error(500,err));
		return {siteInfo};
	};

</script>

<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	
	export let siteInfo;
	const links = siteInfo.links;
	export let segment;
	
	let open = false;
</script>

<style>
	:global(body) {
		padding: 0;
	}
	main {
		background-color: white;
	}
</style>


<main >
	<!-- <Sidebar {links} bind:open {segment} /> -->
	<div class="flex flex-col md:flex-row ">
		<Nav bind:sidebar={open} {...siteInfo.header} {segment} {links}/>
		<div>
			<slot></slot>
			<Footer {...siteInfo.footer} />
		</div>
	</div>
	
</main>