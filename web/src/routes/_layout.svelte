<script context="module">
    import client from "../sanityClient";
    
    export async function preload({params}) {
		const { slug } = params;
        const filter = '*[_type == "siteSettings"][0]'
        const projection = `{
			'header':{
				'categories': *[_type == "category" && _createdAt > "2020"]{
					...,
					mainImage{
						...,
						asset->
					}
				},	
				'bgImage':header.bg_img.asset->url,
				'logo': header.logo_img.asset->url
			},
			...
			}`;
					
		const query = filter + projection;
		const siteInfo = await client
			.fetch(query)
			.catch(err => this.error(500,err));
		siteInfo.pg = slug
		return {siteInfo};
	};

</script>

<script>
	import { fade } from 'svelte/transition'
	import Instagram from '../components/Instagram.svelte';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
    import { stores } from "@sapper/app"
    import { derived } from 'svelte/store';
    
    const { preloading } = stores();
    const delayedPreloading = derived(preloading, (currentPreloading, set) => {
        setTimeout(() => set(currentPreloading), 250);
    });
	
	export let siteInfo;
	let visible = true
	let	onLoad = false
	let open = false

	let pg = siteInfo.pg 
	
	// onMount(async () => {
	// 	setTimeout(function() {onLoad = true}, 50)
		
	// })

</script>

<style>
	/* :global(body) {
		padding: 0;
	}
	main {
		background-color: white;
	} */
	/* #page{
		display: none;
	} */
</style>
<main  in:fade class="layout" id='page'>
	<Header header={siteInfo.header} {pg} />
	<slot></slot>
	<Instagram />
	<Footer links={siteInfo.links} description={siteInfo.description} />
</main>

{#if $preloading && $delayedPreloading} <!-- Show Loading spinner -->
    <div class="preloader"><img src="assets/images/25_125.gif" alt="" class="preloader-image"></div>
{/if}